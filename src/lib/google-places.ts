import { unstable_cache } from "next/cache";

export interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  relative_time_description: string;
  profile_photo_url: string;
  author_url?: string;
}

export interface GooglePlaceData {
  rating: number;
  totalReviews: number;
  reviews: GoogleReview[];
}

// Places API (New) response shape
interface PlacesNewResponse {
  rating?: number;
  userRatingCount?: number;
  reviews?: Array<{
    rating?: number;
    text?: { text?: string; languageCode?: string };
    originalText?: { text?: string; languageCode?: string };
    relativePublishTimeDescription?: string;
    publishTime?: string;
    authorAttribution?: {
      displayName?: string;
      uri?: string;
      photoUri?: string;
    };
  }>;
  error?: { message?: string; status?: string };
}

async function fetchGooglePlaceDetails(): Promise<GooglePlaceData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    console.warn("Google Places API key or Place ID not configured");
    return null;
  }

  try {
    // Places API (New) — la legacy place/details requiere habilitar la API antigua.
    const url = `https://places.googleapis.com/v1/places/${placeId}?languageCode=es`;
    const response = await fetch(url, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask":
          "rating,userRatingCount,reviews.rating,reviews.text,reviews.originalText,reviews.relativePublishTimeDescription,reviews.publishTime,reviews.authorAttribution",
      },
      next: { revalidate: 604800 }, // Cache for 1 week
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data: PlacesNewResponse = await response.json();

    if (data.error) {
      console.error("Google Places API error:", data.error.status, data.error.message);
      return null;
    }

    // Filter: only 5-star reviews with text
    const filteredReviews = (data.reviews ?? [])
      .filter((review) => {
        const txt = review.text?.text ?? review.originalText?.text ?? "";
        return review.rating === 5 && txt.trim().length > 0;
      })
      .map((review) => ({
        author_name: review.authorAttribution?.displayName ?? "Paciente",
        rating: review.rating ?? 5,
        text: review.text?.text ?? review.originalText?.text ?? "",
        time: review.publishTime ? Date.parse(review.publishTime) : 0,
        relative_time_description: review.relativePublishTimeDescription ?? "",
        profile_photo_url: review.authorAttribution?.photoUri || "/images/avatars/default.webp",
        author_url: review.authorAttribution?.uri,
      }));

    return {
      rating: data.rating ?? 5.0,
      totalReviews: data.userRatingCount ?? 0,
      reviews: filteredReviews,
    };
  } catch (error) {
    console.error("Error fetching Google Place details:", error);
    return null;
  }
}

// Cached version - revalidates every week
export const getGooglePlaceData = unstable_cache(
  fetchGooglePlaceDetails,
  ["google-place-data"],
  {
    revalidate: 604800, // 1 week
    tags: ["google-reviews"],
  }
);

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SITE_CONFIG } from "@/lib/constants";
import { getBlogPosts, getFeaturedPost } from "@/lib/blog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CalendarDots, Clock, ArrowRight, Newspaper } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/layout/page-hero";
import { JsonLdCollectionPage } from "@/components/seo/json-ld";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });

  const localePath = locale === "en" ? "/en" : "";

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: `${SITE_CONFIG.baseUrl}${localePath}/blog`,
      languages: {
        es: "/blog",
        en: "/en/blog",
      },
    },
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      type: "website",
      url: `${SITE_CONFIG.baseUrl}${localePath}/blog`,
    },
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "blog" });

  const getLocalizedHref = (href: string) => {
    if (locale === "es") return href;
    return href.startsWith("/") ? `/${locale}${href}` : `/${locale}/${href}`;
  };

  const allPosts = getBlogPosts(locale);
  const featuredPost = getFeaturedPost(locale);
  const regularPosts = allPosts.filter((post) => post.slug !== featuredPost?.slug);

  const localePath = locale === "en" ? "/en" : "";

  return (
    <>
      <JsonLdCollectionPage
        name={t("metaTitle")}
        description={t("metaDescription")}
        url={`${SITE_CONFIG.baseUrl}${localePath}/blog`}
      />
      {/* Header */}
      <PageHero
        icon={Newspaper}
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      {/* Content */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4">

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <Link href={getLocalizedHref(`/blog/${featuredPost.slug}`)} className="block group">
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-shadow rounded-3xl">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative aspect-video md:aspect-auto md:min-h-105 overflow-hidden">
                    <Image
                      src={featuredPost.image || "/images/blog/default.webp"}
                      alt={`${featuredPost.title} - Blog de salud Clínica Hispana Corazón y Vida Pasadena`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                    <div aria-hidden className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent md:bg-linear-to-r" />
                    <Badge className="absolute top-4 left-4 bg-red-primary shadow-md">
                      ★ {t("featured")}
                    </Badge>
                  </div>
                  <CardContent className="flex flex-col justify-center p-6 md:p-10">
                    {featuredPost.category && (
                      <Badge variant="outline" className="w-fit mb-4 border-red-primary/30 text-red-primary">
                        {featuredPost.category}
                      </Badge>
                    )}
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-dark mb-4 group-hover:text-red-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {featuredPost.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <span className="flex items-center gap-1">
                        <CalendarDots className="w-4 h-4" />
                        {new Date(featuredPost.date).toLocaleDateString(locale, {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                      {featuredPost.readTime && (
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime} {t("minRead")}
                        </span>
                      )}
                    </div>
                    <span className="inline-flex items-center gap-2 text-red-primary font-medium group-hover:gap-3 transition-all">
                      {t("readMore")}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </div>
        )}

        {/* Regular Posts Grid */}
        {regularPosts.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link key={post.slug} href={getLocalizedHref(`/blog/${post.slug}`)} className="group">
                <Card className="h-full overflow-hidden border-0 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={post.image || "/images/blog/default.webp"}
                      alt={`${post.title} - Blog de salud Clínica Hispana Corazón y Vida Pasadena`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {post.category && (
                      <Badge className="absolute top-3 left-3 bg-white/90 text-red-primary shadow-sm backdrop-blur-sm hover:bg-white">
                        {post.category}
                      </Badge>
                    )}
                  </div>
                  <CardHeader className="pb-2">
                    <h3 className="text-xl font-bold text-slate-dark group-hover:text-red-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <CalendarDots className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString(locale, {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      {post.readTime && (
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime} {t("minRead")}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}

        {/* Empty State */}
        {allPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">{t("noPosts")}</p>
          </div>
        )}
        </div>
      </section>
    </>
  );
}

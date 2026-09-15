import { NextResponse } from "next/server";
import { SITE_CONFIG } from "@/lib/constants";

/**
 * Ping a IndexNow (Bing, Yandex, etc.) para notificar URLs nuevas o actualizadas.
 * Requiere INDEXNOW_KEY (pública por diseño, servida en /<key>.txt) e
 * INDEXNOW_TOKEN (privada) para que solo nosotros podamos enviar URLs.
 *
 * Cabecera obligatoria: Authorization: Bearer <INDEXNOW_TOKEN>.
 * Body opcional: { "urls": ["https://.../a", "https://.../b"] }. Sin body, la home.
 */
export async function POST(request: Request) {
  const token = process.env.INDEXNOW_TOKEN;
  if (!token) {
    return NextResponse.json({ error: "INDEXNOW_TOKEN no configurada" }, { status: 503 });
  }
  if (request.headers.get("authorization") !== `Bearer ${token}`) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const key = process.env.INDEXNOW_KEY;
  if (!key) {
    return NextResponse.json({ error: "INDEXNOW_KEY no configurada" }, { status: 500 });
  }

  let urlList: string[] = [];
  try {
    const body = (await request.json()) as { urls?: unknown };
    if (Array.isArray(body?.urls)) {
      urlList = body.urls.filter((u): u is string => typeof u === "string" && u.startsWith(SITE_CONFIG.baseUrl));
    }
  } catch {
    // sin body válido → se usa la home
  }
  if (urlList.length === 0) urlList = [SITE_CONFIG.baseUrl];

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      host: new URL(SITE_CONFIG.baseUrl).host,
      key,
      keyLocation: `${SITE_CONFIG.baseUrl}/${key}.txt`,
      urlList,
    }),
  });

  return NextResponse.json({ submitted: urlList.length, status: res.status });
}

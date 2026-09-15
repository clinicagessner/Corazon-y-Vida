"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import { routing, usePathname } from "@/i18n/routing";
import { Globe } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  isScrolled?: boolean;
}

export function LanguageSwitcher({ isScrolled = true }: LanguageSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const newLocale = locale === "es" ? "en" : "es";

  // Enlace real (<a href>) para que Google y los bots de IA descubran la otra versión de idioma.
  // Href a mano: con localePrefix "as-needed" el Link de next-intl con locale="es" genera /es (307).
  const href =
    newLocale === routing.defaultLocale
      ? pathname
      : pathname === "/"
        ? `/${newLocale}`
        : `/${newLocale}${pathname}`;

  return (
    <Button
      asChild
      variant="ghost"
      size="sm"
      className={cn(
        "gap-1.5 font-medium",
        isScrolled
          ? "text-slate-dark hover:text-red-primary hover:bg-red-light/50"
          : "text-white hover:text-white/80 hover:bg-white/10"
      )}
    >
      <Link
        href={href}
        replace
        hrefLang={newLocale}
        aria-label={locale === "es" ? "Switch to English" : "Cambiar a Español"}
      >
        <Globe className="size-4" weight="bold" />
        <span className="uppercase">{locale === "es" ? "EN" : "ES"}</span>
      </Link>
    </Button>
  );
}

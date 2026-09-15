"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

// El formulario (react-hook-form + Zod + Radix Select, ~400 KB de JS) va al
// final de la página: se descarga y monta solo cuando la sección entra en
// pantalla, para que no compita con el hero en la carga inicial (LCP).
// No tiene contenido indexable, así que no se renderiza en el servidor.
const ContactForm = dynamic(
  () => import("@/components/forms/contact-form").then((m) => m.ContactForm),
  { ssr: false, loading: () => <div className="min-h-[560px]" aria-hidden="true" /> },
);

export function ContactFormLazy() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [visible]);

  return <div ref={ref}>{visible ? <ContactForm /> : <div className="min-h-[560px]" aria-hidden="true" />}</div>;
}

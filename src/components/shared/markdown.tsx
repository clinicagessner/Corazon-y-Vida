import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "@/i18n/routing";

// Renderizador único de markdown (posts y servicios): GFM con tablas y listas
// bien formadas, enlaces internos con el prefijo de idioma, y sin repetir el
// H1 de la plantilla cuando el markdown empieza por "# Título".
// (El parser casero anterior dejaba <li> huérfanos, asteriscos y tablas crudas.)
const components: Components = {
  h1: () => null,
  h2: ({ children }) => (
    <h2 className="mt-10 mb-4 font-heading text-2xl md:text-3xl font-bold text-slate-dark">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 mb-3 flex items-center gap-2 font-heading text-lg md:text-xl font-bold text-slate-dark">
      <span className="size-1.5 shrink-0 rounded-full bg-red-primary" aria-hidden />
      {children}
    </h3>
  ),
  p: ({ children }) => <p className="mb-4 leading-relaxed text-slate-600">{children}</p>,
  ul: ({ children }) => <ul className="md-check mb-5 space-y-2">{children}</ul>,
  ol: ({ children }) => <ol className="mb-5 list-decimal space-y-2 pl-6 text-slate-600">{children}</ol>,
  li: ({ children }) => <li className="text-slate-600">{children}</li>,
  strong: ({ children }) => <strong className="font-semibold text-slate-dark">{children}</strong>,
  a: ({ href = "", children }) =>
    href.startsWith("/") ? (
      <Link href={href} className="font-medium text-red-primary underline-offset-2 hover:underline">
        {children}
      </Link>
    ) : (
      <a href={href} target="_blank" rel="noopener noreferrer" className="font-medium text-red-primary underline-offset-2 hover:underline">
        {children}
      </a>
    ),
  table: ({ children }) => (
    <div className="mb-6 overflow-x-auto rounded-xl border border-slate-100">
      <table className="w-full text-sm text-slate-600">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-slate-50 text-left font-semibold text-slate-dark">{children}</thead>,
  th: ({ children }) => <th className="px-4 py-2.5">{children}</th>,
  td: ({ children }) => <td className="border-t border-slate-100 px-4 py-2.5 align-top">{children}</td>,
  blockquote: ({ children }) => (
    <blockquote className="mb-4 border-l-4 border-red-primary bg-red-warm px-4 py-2 text-slate-600">{children}</blockquote>
  ),
};

export function Markdown({ content }: { content: string }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {content}
    </ReactMarkdown>
  );
}

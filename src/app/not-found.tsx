import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4">
          404
        </p>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
          Stranica nije pronađena
        </h1>
        <p className="text-slate-400 mb-8">
          Stranica koju tražite ne postoji ili je premeštena.
          <br />
          The page you are looking for does not exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/sr"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
          >
            Početna stranica
          </Link>
          <Link
            href="/en"
            className="inline-flex items-center justify-center px-6 py-3 border border-slate-600 text-white font-semibold rounded-lg hover:border-white transition-colors"
          >
            Homepage (EN)
          </Link>
        </div>
        <div className="mt-12 flex flex-wrap gap-4 justify-center text-sm text-slate-500">
          <Link href="/sr/usluge" className="hover:text-white transition-colors">
            Usluge
          </Link>
          <Link href="/sr/blog" className="hover:text-white transition-colors">
            Blog
          </Link>
          <Link href="/sr/case-studies" className="hover:text-white transition-colors">
            Case Studies
          </Link>
          <Link href="/sr/kontakt" className="hover:text-white transition-colors">
            Kontakt
          </Link>
        </div>
      </div>
    </div>
  );
}

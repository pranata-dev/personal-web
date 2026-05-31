import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full py-8 border-t border-timberwolf/20 bg-vandyke">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="mb-10 md:mb-0 text-center md:text-left">
          <p className="font-display-lg text-body-lg text-seashell mb-2">
            PRANATA
          </p>
          <p className="font-label-caps text-label-caps text-khaki">
            © 2026 Pranata. Bookmarks made public.
          </p>
        </div>
        <div className="flex gap-20">
          <Link
            className="font-label-caps text-label-caps text-khaki hover:text-seashell transition-all duration-300 opacity-80 hover:opacity-100"
            href="https://www.linkedin.com/in/pranatayudha26/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
          <Link
            className="font-label-caps text-label-caps text-khaki hover:text-seashell transition-all duration-300 opacity-80 hover:opacity-100"
            href="https://github.com/pranata-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          <Link
            className="font-label-caps text-label-caps text-khaki hover:text-seashell transition-all duration-300 opacity-80 hover:opacity-100"
            href="https://medium.com/@pranata26"
            target="_blank"
            rel="noopener noreferrer"
          >
            Medium
          </Link>
          <Link
            className="font-label-caps text-label-caps text-khaki hover:text-seashell transition-all duration-300 opacity-80 hover:opacity-100"
            href="mailto:dzulfikaryudha@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-white/10 bg-background py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Левая колонка — логотип и описание */}
          <div className="text-center md:text-left">
            <p className="text-xl font-bold tracking-tight">
              Melkorp<span className="text-primary">.</span>
            </p>
            <p className="mt-1 text-sm text-slate-400">
              Разработка SEO-ориентированных frontend-платформ
            </p>
          </div>

          {/* Центр — навигация */}
          <nav className="flex gap-6 text-sm font-medium text-slate-400">
            <Link
              href="#services"
              className="hover:text-primary transition-colors"
            >
              Услуги
            </Link>
            <Link
              href="#portfolio"
              className="hover:text-primary transition-colors"
            >
              Портфолио
            </Link>
            <Link
              href="#contacts"
              className="hover:text-primary transition-colors"
            >
              Контакты
            </Link>
          </nav>

          {/* Правая колонка — GitHub */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <Link
              href="#contacts"
              className="text-sm text-slate-400 hover:text-primary transition-colors"
            >
              Написать
            </Link>
            <a
              href="https://github.com/melkorp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-primary transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.95 3.2 9.14 7.64 10.62.56.1.76-.24.76-.54 0-.27-.01-1-.02-1.96-3.11.68-3.77-1.5-3.77-1.5-.51-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.16 1.71 1.16.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.71-1.49-2.48-.28-5.08-1.24-5.08-5.52 0-1.22.43-2.21 1.14-2.99-.12-.28-.5-1.4.11-2.92 0 0 .94-.3 3.08 1.14.89-.25 1.85-.37 2.8-.37.95 0 1.91.12 2.8.37 2.14-1.44 3.08-1.14 3.08-1.14.61 1.52.23 2.64.11 2.92.71.78 1.14 1.77 1.14 2.99 0 4.29-2.61 5.24-5.1 5.52.4.34.76 1.02.76 2.06 0 1.49-.01 2.69-.01 3.05 0 .3.2.65.77.54C19.05 20.89 22.25 16.7 22.25 11.75 22.25 5.48 17.27.5 12 .5z" />
              </svg>
              GitHub →
            </a>
          </div>
        </div>

        {/* Нижняя строка — копирайт */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-slate-500">
          © {currentYear} Melkorp. Built with Next.js • TypeScript • Tailwind
          CSS
        </div>
      </div>
    </footer>
  );
}

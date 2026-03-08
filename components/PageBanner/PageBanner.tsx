// components/PageBanner.tsx
import React from "react";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

interface PageBannerProps {
  title: string;
  breadcrumbs?: {
    label: string;
    href: string;
  }[];
}

const PageBanner = ({ title, breadcrumbs = [] }: PageBannerProps) => {
  return (
    <section className="relative py-16 bg-gradient-to-r from-[#df8423]/60 to-pink-600/40 dark:from-[#df8423]/10 dark:to-pink-600/10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern.jpg')] opacity-5" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#df8423]/60 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-600/60 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white dark:text-black mb-4">
            {title}
          </h1>

          {/* Breadcrumb */}
          {breadcrumbs.length > 0 && (
            <nav className="flex items-center justify-center gap-2 text-sm">
              <Link
                href="/"
                className="flex items-center gap-1 text-gray-400 dark:text-gray-600 hover:text-[#df8423] dark:hover:text-[#df8423] transition-colors"
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>

              {breadcrumbs.map((item, index) => (
                <React.Fragment key={item.href}>
                  <ChevronRight className="w-4 h-4 text-gray-500 dark:text-gray-500" />
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-[#df8423] dark:text-[#df8423] font-medium">
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-400 dark:text-gray-600 hover:text-[#df8423] dark:hover:text-[#df8423] transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageBanner;

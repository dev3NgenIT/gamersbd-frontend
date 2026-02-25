// components/navigation/CategoriesDropdown.tsx
"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

interface Category {
  _id: string;
  name: string;
  description: string;
  image: string | null;
  subcategories: Category[];
}

interface CategoriesDropdownProps {
  categories: Category[];
  activeCategoryTab: string;
  onCategoryChange: (category: string) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const CategoriesDropdown = ({
  categories,
  activeCategoryTab,
  onCategoryChange,
  onMouseEnter,
  onMouseLeave,
}: CategoriesDropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(
      "CategoriesDropdown rendered with categories:",
      categories.length,
    );
  }, [categories]);

  const hasCategories = categories.length > 0;
  const activeCategory = hasCategories
    ? categories.find((cat) => cat.name === activeCategoryTab) || categories[0]
    : null;

  if (!hasCategories) {
    return (
      <div
        ref={dropdownRef}
        className="bg-base-100 shadow-xl border-t border-base-200 py-12 container mx-auto px-4"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="text-center py-16 bg-base-100 rounded-lg border border-dashed border-base-300">
          <div className="text-6xl mb-4">📭</div>
          <h3 className="text-2xl font-bold mb-2">No Categories Found</h3>
          <p className="text-base-content/60 mb-6">
            There are no categories available at the moment.
          </p>
          <Link href="/" className="btn btn-primary">
            Go to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={dropdownRef}
      className="bg-base-100 shadow-xl border-t border-base-200 py-8 container mx-auto px-4"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex gap-8">
        {/* Left Sidebar - Root Categories */}
        <div className="w-1/4 border-r border-base-200 pr-6">
          <h3 className="font-bold text-lg mb-4 px-3">CATEGORIES</h3>
          <div className="space-y-1">
            {categories.map((category) => (
              <button
                key={category._id}
                onClick={() => onCategoryChange(category.name)}
                onMouseEnter={() => onCategoryChange(category.name)}
                className={`w-full text-left px-3 py-2.5 rounded-lg transition-all duration-200 ${
                  activeCategoryTab === category.name
                    ? "bg-primary text-white shadow-md"
                    : "hover:bg-base-200 text-base-content"
                }`}
              >
                <span className="font-medium">{category.name}</span>
                {category.subcategories.length > 0 && (
                  <svg
                    className={`w-4 h-4 float-right mt-1 transition-transform ${
                      activeCategoryTab === category.name ? "translate-x-1" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>

          <Link
            href="/categories"
            className="flex items-center justify-between mt-6 px-3 py-2 text-sm text-primary hover:text-primary/80 font-medium border-t border-base-200 pt-4"
          >
            <span>View All Categories</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>

        {/* Right Side - Subcategories */}
        <div className="w-3/4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg text-primary">
              {activeCategoryTab}
            </h3>
            <Link
              href={`/category/${activeCategory?._id}`}
              className="text-sm text-primary hover:text-primary/80 flex items-center gap-1"
            >
              View All
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {activeCategory && (
            <>
              {activeCategory.subcategories.length > 0 ? (
                <div className="grid grid-cols-2 gap-4">
                  {activeCategory.subcategories.map((sub) => (
                    <Link
                      key={sub._id}
                      href={`/category/${sub._id}`}
                      className="p-3 rounded-lg hover:bg-base-200 transition-all duration-200 border border-transparent hover:border-base-300"
                    >
                      <span className="font-medium block">{sub.name}</span>
                      <span className="text-xs text-base-content/60">
                        {sub.description?.substring(0, 40)}...
                      </span>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-base-100 rounded-lg border border-dashed border-base-300">
                  <div className="text-4xl mb-3">📦</div>
                  <h4 className="font-medium text-lg mb-1">
                    {activeCategory.name}
                  </h4>
                  <p className="text-sm text-base-content/60 mb-2">
                    {activeCategory.description || "No description available"}
                  </p>
                  <p className="text-sm text-base-content/40 mb-4">
                    No subcategories found
                  </p>
                  <Link
                    href={`/category/${activeCategory._id}`}
                    className="btn btn-primary btn-sm"
                  >
                    Browse {activeCategory.name}
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoriesDropdown;

// components/navigation/CategoriesDropdown.tsx
"use client";

import Link from "next/link";

interface Category {
  _id: string;
  name: string;
  description: string;
  icon: string;
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
  onMouseLeave
}: CategoriesDropdownProps) => {
  // Find active category object
  const activeCategory = categories.find(cat => cat.name === activeCategoryTab) || categories[0];

  return (
    <div
      className="absolute left-0 right-0 bg-base-100 shadow-sm border-t border-base-200 p-8"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="container mx-auto px-4">
        <div className="flex gap-8">
          {/* Left Sidebar - Root Categories */}
          <div className="w-1/4 border-r border-base-200 pr-6">
            <h3 className="font-bold text-lg mb-4 px-3">SHOP BY CATEGORY</h3>
            <div className="space-y-1">
              {categories.map((category) => (
                <button
                  key={category._id}
                  onClick={() => onCategoryChange(category.name)}
                  onMouseEnter={() => onCategoryChange(category.name)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                    activeCategoryTab === category.name
                      ? "bg-primary text-white shadow-md"
                      : "hover:bg-base-200 text-base-content"
                  }`}
                >
                  <span className="text-xl">{category.icon}</span>
                  <span className="font-medium">{category.name}</span>
                  {category.subcategories.length > 0 && (
                    <svg
                      className={`w-4 h-4 ml-auto transition-transform ${
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

            {/* View All Categories Link */}
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

            {/* Subcategories Grid */}
            {activeCategory && (
              <>
                {activeCategory.subcategories.length > 0 ? (
                  <div className="grid grid-cols-2 gap-4">
                    {activeCategory.subcategories.map((sub) => (
                      <Link
                        key={sub._id}
                        href={`/category/${sub._id}`}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-base-200 transition-all duration-200 border border-transparent hover:border-base-300 group"
                      >
                        <span className="text-2xl group-hover:scale-110 transition-transform">
                          {sub.icon}
                        </span>
                        <div>
                          <span className="font-medium block">{sub.name}</span>
                          <span className="text-xs text-base-content/60">
                            {sub.description?.substring(0, 40)}...
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-base-100 rounded-lg border border-dashed border-base-300">
                    <span className="text-4xl mb-3 block">{activeCategory.icon}</span>
                    <h4 className="font-medium text-lg mb-1">{activeCategory.name}</h4>
                    <p className="text-sm text-base-content/60 mb-4">{activeCategory.description}</p>
                    <Link
                      href={`/category/${activeCategory._id}`}
                      className="btn btn-primary btn-sm"
                    >
                      Browse {activeCategory.name}
                    </Link>
                  </div>
                )}

                {/* Level 2 Subcategories (if any) */}
                {activeCategory.subcategories.some(sub => sub.subcategories.length > 0) && (
                  <div className="mt-8">
                    <h4 className="font-medium text-sm mb-3 text-base-content/70">Popular in {activeCategoryTab}</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeCategory.subcategories
                        .filter(sub => sub.subcategories.length > 0)
                        .flatMap(sub => sub.subcategories)
                        .slice(0, 6)
                        .map((level2, idx) => (
                          <Link
                            key={idx}
                            href={`/category/${level2._id}`}
                            className="px-3 py-1 bg-base-200 hover:bg-base-300 rounded-full text-sm transition-colors"
                          >
                            {level2.name}
                          </Link>
                        ))}
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Featured Section */}
            {activeCategory && (
              <div className="mt-6 pt-4 border-t border-base-200">
                <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-4">
                  <h4 className="font-medium text-sm mb-2">
                    🔥 Featured in {activeCategoryTab}
                  </h4>
                  <div className="flex gap-4 text-sm flex-wrap">
                    <Link href="#" className="hover:text-primary">
                      New Arrivals
                    </Link>
                    <Link href="#" className="hover:text-primary">
                      Best Sellers
                    </Link>
                    <Link href="#" className="hover:text-primary">
                      Sale
                    </Link>
                    <Link href="#" className="hover:text-primary">
                      Brands
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesDropdown;
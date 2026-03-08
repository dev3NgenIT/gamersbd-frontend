// components/navigation/SpecializedDropdown.tsx
"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

interface Item {
  name: string;
  href: string;
  icon: string;
  description?: string;
  badge?: string;
}

interface SpecializedDropdownProps {
  items: Item[];
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  isSticky?: boolean;
}

const SpecializedDropdown = ({
  items,
  onMouseEnter,
  onMouseLeave,
  isSticky = false,
}: SpecializedDropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Group items into categories for better organization
  const gamingItems = items.filter((item) =>
    ["Gaming PCs", "Laptops", "Accessories"].includes(item.name),
  );

  const mobileItems = items.filter((item) =>
    ["Smartphones", "Wearables"].includes(item.name),
  );

  const mediaItems = items.filter((item) =>
    ["Cameras", "Audio", "Drones"].includes(item.name),
  );

  return (
    <div
      ref={dropdownRef}
      className={`bg-white dark:bg-gray-900 shadow-xl border-t border-gray-200 dark:border-gray-800 py-8 max-w-7xl mx-auto px-4 transition-all duration-300 ${
        isSticky ? "fixed left-0 right-0 mx-auto" : "absolute left-0 right-0"
      }`}
      style={{
        top: isSticky ? "73px" : "100%",
        zIndex: 100,
        maxHeight: "calc(100vh - 100px)",
        overflowY: "auto",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            Specialized Products
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Explore our curated collection of specialized gaming and tech
            products
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Gaming Section */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Gaming
            </h4>
            <div className="space-y-2">
              {gamingItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 group"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <div className="flex-1">
                    <span className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.name}
                    </span>
                    {item.description && (
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {item.description}
                      </p>
                    )}
                  </div>
                  {item.badge && (
                    <span className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-medium rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Section */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-green-600 dark:text-green-400 uppercase tracking-wider">
              Mobile & Wearables
            </h4>
            <div className="space-y-2">
              {mobileItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 group"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <div className="flex-1">
                    <span className="font-medium text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      {item.name}
                    </span>
                    {item.description && (
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {item.description}
                      </p>
                    )}
                  </div>
                  {item.badge && (
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-medium rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Media Section */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
              Media & Audio
            </h4>
            <div className="space-y-2">
              {mediaItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 group"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <div className="flex-1">
                    <span className="font-medium text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {item.name}
                    </span>
                    {item.description && (
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {item.description}
                      </p>
                    )}
                  </div>
                  {item.badge && (
                    <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-medium rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Featured Section */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-wider">
              Featured
            </h4>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-900 rounded-lg p-4">
              <div className="text-3xl mb-2">⚡</div>
              <h5 className="font-bold text-gray-900 dark:text-white mb-1">
                Flash Sale
              </h5>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Up to 50% off on selected items
              </p>
              <Link
                href="/offers/flash-sales"
                className="inline-flex items-center text-sm font-medium text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 group"
              >
                Shop Now
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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

            {/* Quick Links */}
            <div className="mt-4">
              <Link
                href="/specialized/all"
                className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-colors group"
              >
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  View All Specialized
                </span>
                <svg
                  className="w-4 h-4 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecializedDropdown;

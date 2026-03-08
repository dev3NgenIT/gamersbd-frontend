"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

interface OfferItem {
  name: string;
  href: string;
  badge: string;
  description?: string;
  discount?: string;
  endDate?: string;
}

interface OffersDropdownProps {
  items: OfferItem[];
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  isSticky?: boolean;
}

const OffersDropdown = ({ 
  items, 
  onMouseEnter, 
  onMouseLeave,
  isSticky = false 
}: OffersDropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Group offers by type for better organization
  const hotDeals = items.filter(item => 
    item.badge.includes("Hot") || 
    item.badge.includes("Limited") || 
    item.badge.includes("🔥")
  );
  
  const salesOffers = items.filter(item => 
    item.badge.includes("% Off") || 
    item.badge.includes("Save") || 
    item.badge.includes("50%")
  );
  
  const specialOffers = items.filter(item => 
    !hotDeals.includes(item) && 
    !salesOffers.includes(item)
  );

  // Get badge color based on content
  const getBadgeStyles = (badge: string) => {
    if (badge.includes('Hot') || badge.includes('🔥')) {
      return 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800';
    }
    if (badge.includes('% Off') || badge.includes('50%')) {
      return 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800';
    }
    if (badge.includes('Limited')) {
      return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800';
    }
    if (badge.includes('Save')) {
      return 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800';
    }
    if (badge.includes('Bonus')) {
      return 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800';
    }
    return 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700';
  };

  return (
    <div
      ref={dropdownRef}
      className={`bg-white dark:bg-gray-900 shadow-xl border-t border-gray-200 dark:border-gray-800 py-8 max-w-7xl mx-auto px-4 transition-all duration-300 ${
        isSticky ? 'fixed left-0 right-0 mx-auto' : 'absolute left-0 right-0'
      }`}
      style={{
        top: isSticky ? '73px' : '100%',
        zIndex: 100,
        maxHeight: 'calc(100vh - 100px)',
        overflowY: 'auto',
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-7xl mx-auto">
        {/* Featured Banner */}
        <div className="mb-8 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 rounded-xl p-6 border border-red-200 dark:border-red-800/50">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center text-3xl">
                🏷️
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  Special Offers & Deals
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Limited time offers, grab them while stocks last!
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-sm font-medium text-red-600 dark:text-red-400">
                  ⏰ Flash Sale Ends in:
                </div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                  23:59:45
                </div>
              </div>
              <Link
                href="/offers"
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors shadow-lg shadow-red-600/20 hover:shadow-xl hover:shadow-red-600/30 flex items-center gap-2 group"
              >
                View All Offers
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
          </div>
        </div>

        {/* Main Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group relative p-5 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 border-2 border-transparent hover:border-red-200 dark:hover:border-red-900 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Badge */}
              <div className="absolute -top-2 -right-2 z-10">
                <span className={`px-3 py-1 text-xs font-bold rounded-full border ${getBadgeStyles(item.badge)} shadow-lg`}>
                  {item.badge}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col h-full">
                <div className="text-3xl mb-3">
                  {item.badge.includes('Hot') ? '🔥' : 
                   item.badge.includes('% Off') ? '💰' :
                   item.badge.includes('Limited') ? '⏳' :
                   item.badge.includes('Save') ? '💵' :
                   item.badge.includes('Bonus') ? '🎁' : '🏷️'}
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                  {item.name}
                </h4>
                
                {item.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {item.description}
                  </p>
                )}

                {item.discount && (
                  <div className="mt-auto">
                    <div className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-bold rounded-lg">
                      {item.discount}
                    </div>
                  </div>
                )}

                {/* Hover indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg
                    className="w-5 h-5 text-red-600 dark:text-red-400"
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
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OffersDropdown;
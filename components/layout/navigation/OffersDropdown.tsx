"use client";

import Link from "next/link";

interface OfferItem {
  name: string;
  href: string;
  badge: string;
}

interface OffersDropdownProps {
  items: OfferItem[];
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const OffersDropdown = ({ items, onMouseEnter, onMouseLeave }: OffersDropdownProps) => {
  // Group offers by type for better organization
  const hotDeals = items.filter(item => item.badge.includes("Hot") || item.badge.includes("Limited"));
  const salesOffers = items.filter(item => item.badge.includes("% Off") || item.badge.includes("Save"));
  const specialOffers = items.filter(item => !hotDeals.includes(item) && !salesOffers.includes(item));

  return (
    <div
      className="absolute left-0 right-0 bg-base-100 shadow-sm border-t border-base-200 p-8"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          {/* Featured Banner */}
          <div className="mb-6 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-lg p-4 border border-red-200 dark:border-red-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🏷️</span>
                <div>
                  <h3 className="font-bold text-lg">Special Offers & Deals</h3>
                  <p className="text-sm text-base-content/70">Limited time offers, grab them while stocks last!</p>
                </div>
              </div>
              <Link
                href="/offers"
                className="text-sm text-primary hover:text-primary/80 flex items-center gap-1 font-medium"
              >
                View All Offers
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
          </div>

          {/* Offers Grid */}
          <div className="grid grid-cols-4 gap-4">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group relative flex items-center justify-between p-4 rounded-lg hover:bg-base-200 transition-all duration-200 border border-transparent hover:border-base-300 hover:shadow-md"
              >
                <div>
                  <span className="font-medium group-hover:text-primary transition-colors">
                    {item.name}
                  </span>
                  {/* Optional: Add description or additional info */}
                </div>
                
                {/* Badge with different styles based on content */}
                <span className={`
                  badge badge-sm font-bold
                  ${item.badge.includes('Hot') ? 'badge-secondary animate-pulse' : ''}
                  ${item.badge.includes('% Off') ? 'badge-success' : ''}
                  ${item.badge.includes('Limited') ? 'badge-warning' : ''}
                  ${item.badge.includes('Save') ? 'badge-info' : ''}
                  ${item.badge.includes('Bonus') ? 'badge-accent' : ''}
                  ${!item.badge.includes('Hot') && !item.badge.includes('% Off') && 
                    !item.badge.includes('Limited') && !item.badge.includes('Save') && 
                    !item.badge.includes('Bonus') ? 'badge-primary' : ''}
                `}>
                  {item.badge}
                </span>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-lg bg-primary/0 group-hover:bg-primary/5 transition-colors pointer-events-none" />
              </Link>
            ))}
          </div>

          {/* Additional Categories Section */}
          <div className="mt-8 grid grid-cols-3 gap-4 pt-4 border-t border-base-200">
            {/* Today's Super Deals */}
            {hotDeals.length > 0 && (
              <div>
                <h4 className="font-medium text-sm mb-2 flex items-center gap-1">
                  <span className="text-red-500">🔥</span> Hot Deals
                </h4>
                <div className="space-y-1">
                  {hotDeals.slice(0, 3).map((deal, idx) => (
                    <Link
                      key={idx}
                      href={deal.href}
                      className="block text-xs hover:text-primary transition-colors"
                    >
                      {deal.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Clearance & Sales */}
            {salesOffers.length > 0 && (
              <div>
                <h4 className="font-medium text-sm mb-2 flex items-center gap-1">
                  <span className="text-green-500">💰</span> Clearance
                </h4>
                <div className="space-y-1">
                  {salesOffers.slice(0, 3).map((sale, idx) => (
                    <Link
                      key={idx}
                      href={sale.href}
                      className="block text-xs hover:text-primary transition-colors"
                    >
                      {sale.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Special Offers */}
            {specialOffers.length > 0 && (
              <div>
                <h4 className="font-medium text-sm mb-2 flex items-center gap-1">
                  <span className="text-purple-500">✨</span> Special
                </h4>
                <div className="space-y-1">
                  {specialOffers.slice(0, 3).map((special, idx) => (
                    <Link
                      key={idx}
                      href={special.href}
                      className="block text-xs hover:text-primary transition-colors"
                    >
                      {special.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div className="mt-4 flex items-center justify-between text-xs text-base-content/60 pt-2">
            <div className="flex gap-4">
              <Link href="/offers/todays-deals" className="hover:text-primary">Today's Best Deals</Link>
              <Link href="/offers/clearance" className="hover:text-primary">Clearance Zone</Link>
              <Link href="/offers/flash-sales" className="hover:text-primary">Flash Sales</Link>
            </div>
            <span className="text-primary">Ends soon ⏰</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersDropdown;
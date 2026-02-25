"use client";

import { useState } from "react";
import TopBar from "./TopBar";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = [
    { name: "Electronics", href: "#", icon: "💻" },
    { name: "Fashion", href: "#", icon: "👕" },
    { name: "Home & Living", href: "#", icon: "🏠" },
    { name: "Sports", href: "#", icon: "⚽" },
    { name: "Books", href: "#", icon: "📚" },
    { name: "Toys", href: "#", icon: "🧸" },
    { name: "Beauty", href: "#", icon: "💄" },
    { name: "Automotive", href: "#", icon: "🚗" },
  ];

  const specialized = [
    { name: "Gaming PCs", href: "#", icon: "🎮" },
    { name: "Laptops", href: "#", icon: "💻" },
    { name: "Smartphones", href: "#", icon: "📱" },
    { name: "Cameras", href: "#", icon: "📷" },
    { name: "Audio", href: "#", icon: "🎧" },
    { name: "Wearables", href: "#", icon: "⌚" },
    { name: "Drones", href: "#", icon: "🚁" },
    { name: "Accessories", href: "#", icon: "🔌" },
  ];

  const offers = [
    { name: "Today's Deals", href: "#", badge: "🔥 Hot" },
    { name: "Clearance", href: "#", badge: "50% Off" },
    { name: "Flash Sales", href: "#", badge: "Limited" },
    { name: "Bundle Offers", href: "#", badge: "Save More" },
    { name: "Student Discount", href: "#", badge: "10% Off" },
    { name: "First Order", href: "#", badge: "15% Off" },
    { name: "Gift Cards", href: "#", badge: "Bonus" },
    { name: "Seasonal Sale", href: "#", badge: "Up to 70%" },
  ];

  const news = [
    { name: "New Arrivals", href: "#", date: "Today" },
    { name: "Product Launches", href: "#", date: "This Week" },
    { name: "Tech Updates", href: "#", date: "Latest" },
    { name: "Store Events", href: "#", date: "Upcoming" },
    { name: "Blog Posts", href: "#", date: "New" },
    { name: "Reviews", href: "#", date: "Trending" },
    { name: "Community", href: "#", date: "Active" },
    { name: "Newsletter", href: "#", date: "Subscribe" },
  ];

  return (
    <header>
      <TopBar />
      <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
        <div className="navbar-start">
          {/* Mobile Menu Button */}
          <button
            className="btn btn-ghost lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <a className="btn btn-ghost text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            amersbd
          </a>
        </div>

        {/* Desktop Navigation with Hover Dropdowns */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* CATEGORIES Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setActiveDropdown("categories")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a className="font-medium hover:bg-base-200 transition-colors">
                CATEGORIES
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
              {activeDropdown === "categories" && (
                <div className="absolute top-full left-0 w-[600px] bg-base-100 rounded-box shadow-xl border border-base-200 p-4 grid grid-cols-4 gap-2">
                  {categories.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center gap-2 p-3 rounded-lg hover:bg-base-200 transition-colors"
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span className="font-medium">{item.name}</span>
                    </a>
                  ))}
                </div>
              )}
            </li>

            {/* SPECIALIZED Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setActiveDropdown("specialized")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a className="font-medium hover:bg-base-200 transition-colors">
                SPECIALIZED
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
              {activeDropdown === "specialized" && (
                <div className="absolute top-full left-0 w-[600px] bg-base-100 rounded-box shadow-xl border border-base-200 p-4 grid grid-cols-4 gap-2">
                  {specialized.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center gap-2 p-3 rounded-lg hover:bg-base-200 transition-colors"
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span className="font-medium">{item.name}</span>
                    </a>
                  ))}
                </div>
              )}
            </li>

            {/* OFFERS Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setActiveDropdown("offers")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a className="font-medium hover:bg-base-200 transition-colors">
                OFFERS
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
              {activeDropdown === "offers" && (
                <div className="absolute top-full left-0 w-[600px] bg-base-100 rounded-box shadow-xl border border-base-200 p-4">
                  <div className="grid grid-cols-2 gap-2">
                    {offers.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-base-200 transition-colors"
                      >
                        <span className="font-medium">{item.name}</span>
                        <span className="badge badge-primary badge-sm">
                          {item.badge}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </li>

            {/* NEWS Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setActiveDropdown("news")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a className="font-medium hover:bg-base-200 transition-colors">
                NEWS
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
              {activeDropdown === "news" && (
                <div className="absolute top-full left-0 w-[600px] bg-base-100 rounded-box shadow-xl border border-base-200 p-4">
                  <div className="grid grid-cols-2 gap-2">
                    {news.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-base-200 transition-colors"
                      >
                        <span className="font-medium">{item.name}</span>
                        <span className="badge badge-ghost badge-sm">
                          {item.date}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>

        {/* Empty navbar-end since all actions are in TopBar */}
        <div className="navbar-end"></div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-base-100 shadow-xl border-t border-base-200 lg:hidden">
            <div className="p-4 space-y-4">
              {/* Mobile Categories */}
              <div>
                <h3 className="font-bold text-lg mb-2 px-2">CATEGORIES</h3>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-base-200 transition-colors"
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span>{item.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile Specialized */}
              <div>
                <h3 className="font-bold text-lg mb-2 px-2">SPECIALIZED</h3>
                <div className="grid grid-cols-2 gap-2">
                  {specialized.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-base-200 transition-colors"
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span>{item.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile Offers */}
              <div>
                <h3 className="font-bold text-lg mb-2 px-2">OFFERS</h3>
                <div className="grid grid-cols-2 gap-2">
                  {offers.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-base-200 transition-colors"
                    >
                      <span>{item.name}</span>
                      <span className="badge badge-primary badge-sm">
                        {item.badge}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile News */}
              <div>
                <h3 className="font-bold text-lg mb-2 px-2">NEWS</h3>
                <div className="grid grid-cols-2 gap-2">
                  {news.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-base-200 transition-colors"
                    >
                      <span>{item.name}</span>
                      <span className="badge badge-ghost badge-sm">
                        {item.date}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
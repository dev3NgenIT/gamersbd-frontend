// components/Header.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import TopBar from "./TopBar";
import ExpandableSearch from "./ExpandableSearch";
import { categoryService } from "../../services/categoryService";
import CategoriesDropdown from "./navigation/CategoriesDropdown";
import SpecializedDropdown from "./navigation/SpecializedDropdown";
import MobileMenu from "./navigation/MobileMenu";
import DesktopNav from "./navigation/DesktopNav";
import OffersDropdown from "./navigation/OffersDropdown";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategoryTab, setActiveCategoryTab] = useState<string>("");
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const headerRef = useRef<HTMLDivElement>(null);
  const dropdownTimerRef = useRef<NodeJS.Timeout>();

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      const data = await categoryService.getAllCategories();
      const tree = categoryService.buildCategoryTree(data);
      setCategories(tree);

      // Set first category as active if available
      if (tree.length > 0) {
        setActiveCategoryTab(tree[0].name);
      }
      setLoading(false);
    };

    fetchCategories();
  }, []);

  const specialized = [
    { name: "Gaming PCs", href: "/specialized/gaming-pcs", icon: "🎮" },
    { name: "Laptops", href: "/specialized/laptops", icon: "💻" },
    { name: "Smartphones", href: "/specialized/smartphones", icon: "📱" },
    { name: "Cameras", href: "/specialized/cameras", icon: "📷" },
    { name: "Audio", href: "/specialized/audio", icon: "🎧" },
    { name: "Wearables", href: "/specialized/wearables", icon: "⌚" },
    { name: "Drones", href: "/specialized/drones", icon: "🚁" },
    { name: "Accessories", href: "/specialized/accessories", icon: "🔌" },
  ];

  const offers = [
    { name: "Today's Deals", href: "/offers/todays-deals", badge: "🔥 Hot" },
    { name: "Clearance", href: "/offers/clearance", badge: "50% Off" },
    { name: "Flash Sales", href: "/offers/flash-sales", badge: "Limited" },
    { name: "Bundle Offers", href: "/offers/bundles", badge: "Save More" },
    { name: "Student Discount", href: "/offers/students", badge: "10% Off" },
    { name: "First Order", href: "/offers/first-order", badge: "15% Off" },
    { name: "Gift Cards", href: "/offers/gift-cards", badge: "Bonus" },
    { name: "Seasonal Sale", href: "/offers/seasonal", badge: "Up to 70%" },
  ];

  const news = [
    { name: "New Arrivals", href: "/news/new-arrivals", date: "Today" },
    { name: "Product Launches", href: "/news/launches", date: "This Week" },
    { name: "Tech Updates", href: "/news/tech", date: "Latest" },
    { name: "Store Events", href: "/news/events", date: "Upcoming" },
    { name: "Blog Posts", href: "/news/blog", date: "New" },
    { name: "Reviews", href: "/news/reviews", date: "Trending" },
    { name: "Community", href: "/news/community", date: "Active" },
    { name: "Newsletter", href: "/news/newsletter", date: "Subscribe" },
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle dropdown with delay for better UX
  const handleMouseEnter = (dropdown: string) => {
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
    }
    setActiveDropdown(dropdown);
    // Set default category tab when opening categories dropdown
    if (
      dropdown === "categories" &&
      categories.length > 0 &&
      !activeCategoryTab
    ) {
      setActiveCategoryTab(categories[0].name);
    }
  };

  const handleMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <header ref={headerRef}>
      <TopBar />

      {/* Main Header */}
      <div
        className="bg-[#191919] dark:bg-white shadow-sm relative"
        style={{ zIndex: 100 }}
      >
        <div className="container mx-auto">
          <div className="navbar py-3">
            {/* Left Section - Logo & Mobile Menu */}
            <div className="navbar-start">
              <button
                className="btn btn-ghost lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
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
              <Link href="/" className="btn btn-ghost">
                <Image
                  src="/images/GamersBD-logo.png"
                  alt="Gamersbd"
                  width={180}
                  height={50}
                  className="h-auto w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="navbar-center hidden lg:flex">
              <DesktopNav
                activeDropdown={activeDropdown}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </div>

            {/* Right Section - Search */}
            <div className="navbar-end">
              <ExpandableSearch />
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown Panels */}
      <div className="relative" style={{ zIndex: 99 }}>
        {/* Categories Dropdown - Dynamic from API */}
        {activeDropdown === "categories" &&
          !loading &&
          categories.length > 0 && (
            <CategoriesDropdown
              categories={categories}
              activeCategoryTab={activeCategoryTab}
              onCategoryChange={setActiveCategoryTab}
              onMouseEnter={() => handleMouseEnter("categories")}
              onMouseLeave={handleMouseLeave}
            />
          )}

        {/* Specialized Dropdown */}
        {activeDropdown === "specialized" && (
          <SpecializedDropdown
            items={specialized}
            onMouseEnter={() => handleMouseEnter("specialized")}
            onMouseLeave={handleMouseLeave}
          />
        )}

        {/* Offers Dropdown */}
        {activeDropdown === "offers" && (
          <OffersDropdown
            items={offers}
            onMouseEnter={() => handleMouseEnter("offers")}
            onMouseLeave={handleMouseLeave}
          />
        )}

        {/* News Dropdown */}
        {/* {activeDropdown === "news" && (
          <NewsDropdown
            items={news}
            onMouseEnter={() => handleMouseEnter("news")}
            onMouseLeave={handleMouseLeave}
          />
        )} */}
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        categories={categories}
        specialized={specialized}
        offers={offers}
        // news={news}
      />
    </header>
  );
}

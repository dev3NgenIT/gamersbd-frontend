import { User, Heart, RefreshCw, ShoppingCart } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const TopBar = () => {
  return (
    <div className="bg-[#2a2a2a] dark:bg-white text-white dark:text-gray-900 py-3 px-4 sm:px-6 flex flex-wrap items-center justify-between font-sans text-[13px] tracking-wide border-b border-gray-700 dark:border-gray-200">
      {/* Left Side: Navigation Links */}
      <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
        <a
          href="#"
          className="hover:text-gray-300 dark:hover:text-gray-600 transition-colors uppercase font-medium"
        >
          Store
        </a>
        <a
          href="#"
          className="hover:text-gray-300 dark:hover:text-gray-600 transition-colors uppercase font-medium"
        >
          Track Order
        </a>
        <a
          href="#"
          className="hover:text-gray-300 dark:hover:text-gray-600 transition-colors uppercase font-medium"
        >
          About GB
        </a>
        <a
          href="#"
          className="hover:text-gray-300 dark:hover:text-gray-600 transition-colors uppercase font-medium"
        >
          Contact
        </a>
      </div>

      {/* Right Side: User Actions */}
      <div className="flex items-center gap-2 sm:gap-3 mt-2 sm:mt-0">
        {/* Sign In - Moved from Header */}
        <div className="flex items-center gap-1 sm:gap-2 pr-2 sm:pr-3 border-r border-gray-600 dark:border-gray-300">
          <User size={16} className="text-gray-300 dark:text-gray-600" />
          <a
            href="#"
            className="hover:text-gray-300 dark:hover:text-gray-600 whitespace-nowrap"
          >
            Sign in
          </a>
        </div>

        {/* Wishlist */}
        <div className="flex items-center gap-1 pr-2 sm:pr-3 border-r border-gray-600 dark:border-gray-300 relative">
          <Heart
            size={18}
            strokeWidth={1.5}
            className="text-gray-300 dark:text-gray-600"
          />
          <span className="bg-[#d93a3a] dark:bg-red-600 text-[10px] rounded-full h-4 w-4 flex items-center justify-center font-bold text-white">
            0
          </span>
        </div>

        {/* Cart */}
        <div className="flex items-center gap-1 relative">
          <ShoppingCart
            size={18}
            strokeWidth={1.5}
            className="text-gray-300 dark:text-gray-600"
          />
          <span className="bg-[#d93a3a] dark:bg-red-600 text-[10px] rounded-full h-4 w-4 flex items-center justify-center font-bold text-white">
            0
          </span>
        </div>

        {/* Theme Toggle */}
        <div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default TopBar;

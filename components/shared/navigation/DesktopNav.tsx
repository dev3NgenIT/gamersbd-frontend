// components/navigation/DesktopNav.tsx
"use client";

import Link from "next/link";

interface DesktopNavProps {
  activeDropdown: string | null;
  onMouseEnter: (dropdown: string) => void;
  onMouseLeave: () => void;
}

const DesktopNav = ({
  activeDropdown,
  onMouseEnter,
  onMouseLeave,
}: DesktopNavProps) => {
  const navItems = [
    { id: "categories", label: "CATEGORIES" },
    { id: "specialized", label: "SPECIALIZED" },
    { id: "offers", label: "OFFERS" },
  ];

  return (
    <ul className="menu menu-horizontal px-1">
      {navItems.map((item) => (
        <li
          key={item.id}
          className="relative"
          onMouseEnter={() => onMouseEnter(item.id)}
          onMouseLeave={onMouseLeave}
        >
          <Link
            href="#"
            className="font-medium text-white dark:text-gray-900 transition-colors cursor-pointer"
          >
            {item.label}
            {item.id !== "news" && (
              <svg
                className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                  activeDropdown === item.id ? "rotate-0" : "rotate-180"
                }`}
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
            )}
          </Link>
        </li>
      ))}
      <li>
        <Link
          href="/contact-us"
          className="font-medium text-white dark:text-gray-900 transition-colors cursor-pointer"
        >
          Contact Us
        </Link>
      </li>
    </ul>
  );
};

export default DesktopNav;

// components/navigation/SpecializedDropdown.tsx
"use client";

import Link from "next/link";

interface Item {
  name: string;
  href: string;
  icon: string;
}

interface SpecializedDropdownProps {
  items: Item[];
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const SpecializedDropdown = ({ items, onMouseEnter, onMouseLeave }: SpecializedDropdownProps) => {
  return (
    <div
      className="absolute left-0 right-0 bg-base-100 shadow-sm border-t border-base-200 p-8"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-4 gap-4">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-base-200 transition-colors border border-transparent hover:border-base-300"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecializedDropdown;
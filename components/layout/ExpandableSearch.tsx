"use client";

import React, { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react"; // You can also use any icon library or SVG

const ExpandableSearch = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Handle click outside to collapse
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsExpanded(false);
        setSearchQuery(""); // Optional: clear search when collapsing
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Auto-focus input when expanded
  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      // Add your search logic here
      // router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div
      ref={searchRef}
      className="relative flex items-center"
      onMouseEnter={() => setIsExpanded(true)}
    >
      <form onSubmit={handleSearch} className="flex items-center">
        {/* Search Input - expands on hover */}
        <input
          ref={inputRef}
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={`
            h-10 rounded-l-lg border border-r-0 border-base-300 
            bg-base-100 px-4 py-2 text-sm outline-none
            focus:ring-2 focus:ring-primary/50
            transition-all duration-300 ease-in-out
            ${
              isExpanded
                ? "w-64 opacity-100 visible"
                : "w-0 opacity-0 invisible p-0 border-none"
            }
          `}
        />

        {/* Search Button - always visible, square shape */}
        <button
          type="submit"
          className={`
            flex h-10 w-10 items-center justify-center
            bg-transparent border text-white rounded-lg transition-all duration-200
            ${isExpanded ? "rounded-l-none" : "rounded-lg"}
          `}
          aria-label="Search"
        >
          <Search className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
};

export default ExpandableSearch;

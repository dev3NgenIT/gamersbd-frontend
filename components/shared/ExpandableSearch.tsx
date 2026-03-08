"use client";

import React, { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";

const ExpandableSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setSearchQuery("");
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      // router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex h-10 w-10 items-center justify-center bg-transparent border border-[#2a2a2a] text-white rounded-lg hover:bg-[#2a2a2a] transition-all duration-200"
        aria-label="Open search"
      >
        <Search className="h-5 w-5" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => {
            setIsOpen(false);
            setSearchQuery("");
          }}
        >
          <div
            className="mt-20 w-full max-w-2xl mx-4 bg-base-100 rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                ref={inputRef}
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 h-14 px-6 text-lg bg-transparent outline-none"
              />
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  setSearchQuery("");
                }}
                className="h-14 w-14 flex items-center justify-center hover:bg-base-200"
              >
                <X className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ExpandableSearch;

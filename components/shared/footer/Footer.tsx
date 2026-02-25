import React from "react";
import { Facebook, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    /* Updated classes: 
       - Light Mode: bg-white text-black 
       - Dark Mode: dark:bg-[#1a1a1a] dark:text-[#b0b0b0] 
    */
    <footer className="bg-[#1a1a1a] text-black dark:bg-white dark:text-[#b0b0b0] pt-16 pb-8 px-4 font-sans transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo & Contact */}
          <div className="space-y-4">
            <div className="flex items-center gap-1">
              <Link href="/" className="btn btn-ghost p-0">
                <Image
                  src="/images/GamersBD-logo.png"
                  alt="Gamersbd"
                  width={180}
                  height={50}
                  className="h-auto w-auto -mt-2 dark:brightness-100 brightness-90"
                  priority
                />
              </Link>
            </div>

            <div className="text-sm space-y-2 mt-6 leading-relaxed text-white dark:text-black">
              <p>11C, Haque Chamber,</p>
              <p>89/2, Panthapath, Dhaka-1215</p>
              <p>
                Email:{" "}
                <span className="hover:text-primary text-white dark:text-black cursor-pointer">
                  gamersbd.world@gmail.com
                </span>
              </p>
              <p>Phone: +88 02 91100348, +88 01971424220</p>
            </div>

            <div className="flex gap-4 pt-4">
              <Facebook
                size={18}
                className="hover:text-primary text-white dark:text-black cursor-pointer"
              />
              <Youtube
                size={18}
                className="hover:text-primary text-white dark:text-black cursor-pointer"
              />
            </div>
          </div>

          {/* Column 2: Information */}
          <div>
            <h3 className="text-white dark:text-black text-sm font-bold uppercase mb-4 pb-2 border-b border-gray-200 dark:border-gray-700 inline-block w-full">
              Information
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-primary text-white dark:text-black cursor-pointer transition-colors">
                Specials Offers
              </li>
              <li className="hover:text-primary text-white dark:text-black cursor-pointer transition-colors">
                New Products
              </li>
              <li className="hover:text-primary text-white dark:text-black cursor-pointer transition-colors">
                Top Sellers
              </li>
              <li className="hover:text-primary text-white dark:text-black cursor-pointer transition-colors">
                About Us
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white dark:text-black text-sm font-bold uppercase mb-4 pb-2 border-b border-gray-200 dark:border-gray-700 inline-block w-full">
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-primary text-white dark:text-black cursor-pointer transition-colors">
                My Account
              </li>
              <li className="hover:text-primary text-white dark:text-black cursor-pointer transition-colors">
                Login/Register
              </li>
              <li className="hover:text-primary text-white dark:text-black cursor-pointer transition-colors">
                My Orders
              </li>
              <li className="hover:text-primary text-white dark:text-black cursor-pointer transition-colors">
                My Addresses
              </li>
            </ul>
          </div>

          {/* Column 4: Customer Care */}
          <div>
            <h3 className="text-white dark:text-black text-sm font-bold uppercase mb-4 pb-2 border-b border-gray-200 dark:border-gray-700 inline-block w-full">
              Customer Care
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-primary text-white dark:text-black cursor-pointer transition-colors">
                FAQs
              </li>
              <li className="hover:text-primary text-white dark:text-black cursor-pointer transition-colors">
                Order Helps
              </li>
              <li className="hover:text-primary text-white dark:text-black cursor-pointer transition-colors">
                Order Tracks
              </li>
              <li className="hover:text-primary text-white dark:text-black cursor-pointer transition-colors">
                Supports
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 text-white dark:border-black flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            Copyright © 2026{" "}
            <span className="text-white dark:text-black">Gamers BD</span>
          </p>

          <div className="flex items-center gap-2 transition-all dark:invert-0 invert">
            <Image
              src="/images/payments.png"
              alt="Payments"
              width={200}
              height={200}
              className="w-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

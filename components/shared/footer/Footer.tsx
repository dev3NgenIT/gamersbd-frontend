import React from "react";
import { Facebook, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-[#b0b0b0] pt-16 pb-8 px-4 font-sans">
      <div className="container mx-auto px-4">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo & Contact */}
          <div className="space-y-4">
            <div className="flex items-center gap-1">
              <Link href="/" className="btn btn-ghost">
                <Image
                  src="/images/GamersBD-logo.png"
                  alt="Gamersbd"
                  width={180}
                  height={50}
                  className="h-auto w-auto -mt-2"
                  priority
                />
              </Link>
            </div>
            {/* <p className="text-xs uppercase tracking-widest text-[#f37021] font-bold -mt-2">
              Genuine Gamers Platform
            </p> */}

            <div className="text-sm space-y-2 mt-6 leading-relaxed">
              <p>11C, Haque Chamber,</p>
              <p>89/2, Panthapath, Dhaka-1215</p>
              <p>
                Email:{" "}
                <span className="hover:text-white cursor-pointer">
                  gamersbd.world@gmail.com
                </span>
              </p>
              <p>Phone: +88 02 91100348, +88 01971424220</p>
            </div>

            <div className="flex gap-4 pt-4">
              <Facebook size={18} className="hover:text-white cursor-pointer" />
              <Youtube size={18} className="hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Column 2: Information */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase mb-4 pb-2 border-b border-gray-700 inline-block w-full">
              Information
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">
                Specials Offers
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                New Products
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Top Sellers
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                About Us
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase mb-4 pb-2 border-b border-gray-700 inline-block w-full">
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">
                My Account
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Login/Register
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                My Orders
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                My Addresses
              </li>
            </ul>
          </div>

          {/* Column 4: Customer Care */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase mb-4 pb-2 border-b border-gray-700 inline-block w-full">
              Customer Care
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">
                FAQs
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Order Helps
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Order Tracks
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Supports
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            Copyright © 2026 <span className="text-white">Gamers BD</span>
          </p>

          {/* Payment Icons Placeholder */}
          <div className="flex items-center gap-2 transition-all">
            <Image
              src="/images/payments.png"
              alt="Visa"
              width={200}
              height={200}
              className=" w-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

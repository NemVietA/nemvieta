"use client";
import { useState } from "react";
import { useData } from "@context/DataProviders";
import Link from "next/link";
import { BiPhoneCall } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

function Hotline() {
  const { SocialMedia, ContactData } = useData();
  const [showPhoneOptions, setShowPhoneOptions] = useState(false);

  return (
    <div className="fixed bottom-7 right-10 z-50">
      {/* Desktop: 3 nút riêng biệt */}
      <div className="hidden md:flex flex-col items-end gap-4">
        {/* Nút Gọi */}
        <button
        onClick={() => setShowPhoneOptions((prev) => !prev)}
        className="relative h-16 w-16 bg-gradient-to-br from-red-500 to-red-600 border-4 border-white rounded-full shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:scale-110 transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] animate-pulse"
      >
        <BiPhoneCall
          size={30}
          color="white"
          className="absolute inset-0 m-auto drop-shadow-lg"
        />
      </button>
        {showPhoneOptions && (
          <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-white text-gray-800 rounded-xl shadow-2xl px-4 py-3 z-50 w-60 animate-fade-in">
            <button
              onClick={() => setShowPhoneOptions(false)}
              className="absolute top-0 right-0 text-gray-500 hover:text-red-500 transition"
              aria-label="Đóng"
            >
              ✕
            </button>
            <h4 className="text-base font-bold mb-3 text-red-600 text-center">Liên hệ ngay</h4>
            <a href={`tel:${ContactData.phone}`} className="block bg-red-50 hover:bg-red-100 text-red-600 font-semibold px-3 py-2 rounded-md transition text-center">📞 0888 400 007</a>
            <a href="tel:18008384" className="block bg-red-50 hover:bg-red-100 text-red-600 font-semibold px-3 py-2 rounded-md transition text-center">📞 1800 8384</a>
          </div>
        )}
        {/* Nút Facebook */}
        <a href="https://www.facebook.com/ctynemvietaa" target="_blank" rel="noopener noreferrer" className="h-16 w-16 bg-blue-500 border-4 border-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300">
          <FaFacebookF className="text-white text-[28px]" />
        </a>
        {/* Nút Zalo */}
        <a href={`https://${SocialMedia[0]}`} target="_blank" rel="noopener noreferrer" className="h-16 w-16 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300">
          <SiZalo className="text-blue-500 text-[28px]" />
        </a>
      </div>

      {/* Mobile: Nút gộp */}
      <div className="md:hidden relative">
      <div className="fixed bottom-5 right-4 z-50">
        <button
          onClick={() => setShowPhoneOptions((prev) => !prev)}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-red-500 to-red-600 border-2 border-white rounded-full shadow-lg text-white font-semibold text-sm animate-pulse hover:scale-105 transition-all duration-300"
        >
          <BiPhoneCall className="text-white text-[20px]" />
          Liên hệ
        </button>
      </div>
        {showPhoneOptions && (
          <div className="absolute bottom-20 right-0 bg-white text-gray-800 rounded-xl shadow-xl px-4 py-3 w-56 animate-fade-in space-y-2">
            <button
              onClick={() => setShowPhoneOptions(false)}
              className="absolute top-0 right-0 p-2 text-gray-500 hover:text-red-500 transition"
              aria-label="Đóng">
              ✕
            </button>
            <h4 className="text-base font-bold mb-3 text-red-600 text-center">Liên hệ ngay</h4>
            <a href={`tel:${ContactData.phone}`} className="block bg-red-50 hover:bg-red-100 text-red-600 font-semibold px-3 py-2 rounded-md transition">📞 0888 400 007</a>
            <a href="tel:18008384" className="block bg-red-50 hover:bg-red-100 text-red-600 font-semibold px-3 py-2 rounded-md transition">📞 1800 8384</a>
            <a href="https://www.facebook.com/ctynemvietaa" target="_blank" className="block bg-blue-50 hover:bg-blue-100 text-blue-600 font-semibold px-3 py-2 rounded-md transition">📘 Facebook</a>
            <a href={`https://${SocialMedia[0]}`} target="_blank" className="block bg-blue-50 hover:bg-blue-100 text-blue-600 font-semibold px-3 py-2 rounded-md transition">💬 Zalo</a>
          </div>
        )}
      </div>
      
    </div>
  );
}

export default Hotline;
"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Sử dụng dynamic import để chỉ tải Lottie client-side
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import Notfound from "@assets/animation/NotFound.json";

const NotFound = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; 
  }

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <Lottie animationData={Notfound} loop={true} />
    </div>
  );
};


export default NotFound;

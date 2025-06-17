import Category from "@components/client/Home/Category";
import CategoryGrid from "@components/client/Home/CategoryList";
import HomeContent from "@components/client/Home/HomeContent";
import HomeNews from "@components/client/Home/HomeNews";
import HomePolicy from "@components/client/Home/HomePolicy";
import HomeVideo from "@components/client/Home/HomeVideo";
import NewProducts from "@components/client/Home/NewProducts";
import Sale from "@components/client/Home/Sale";
import ShortIntro from "@components/client/Home/ShortIntro";
import Slide from "@components/client/Home/Slide";
import Achievements from "@components/client/Home/SuccessList";
import TopSellingProducts from "@components/client/Home/TopSellingProducts";
import { getAllDataProps, getDataByTypeProps } from "@lib/get-data";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "CÔNG TY TNHH THƯƠNG MẠI SẢN XUẤT VIỆT Á",
  description: "CÔNG TY TNHH THƯƠNG MẠI SẢN XUẤT VIỆT Á ",
};

const HomePage = async () => {
  const Data = await getDataByTypeProps("posts", "topic", "Tin tức");
  const ProductData = await getAllDataProps("products");
  return (
    <div className="bg-slate-100">
      <Slide />
      <Achievements />
      <div className="lg:block hidden">
        <ShortIntro />
      </div>
      <CategoryGrid />
      <Sale />
      <TopSellingProducts />
      <NewProducts />
      <div className="lg:hidden">
        <ShortIntro />
      </div>
      <HomeNews Data={Data} />
      <HomeVideo />
      {/* <div className="d:w-[1400px] d:mx-auto p:w-auto p:mx-2 bg-cover bg-bottom bg-fixed ]">
        <div className="bg-fixed bg-[rgba(255,255,255,0.71)]">
          <HomeContent />

          <HomePolicy />
        </div>
      </div> */}
    </div>
  );
};

export default HomePage;

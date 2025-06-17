"use client";
import { useData } from "@context/DataProviders";
import React, { useState } from "react";
import ProductCard from "../Product/ProductCard";
import { Pagination } from "antd";
import { ITEMS_PER_PAGE } from "@assets/item";

const TopSellingProductsMobile = () => {
  const { Products } = useData();
  let ProductFiltered: any;

  if (Products?.length > 0) {
    ProductFiltered = Products.filter((item: any) => {
      if (item.parent2Url === "san-pham-ban-chay") return true;
      return false;
    });
  }

  const [currentPage, setCurrentPage] = useState(1);

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIdx = startIdx + ITEMS_PER_PAGE;
  const currentItems = ProductFiltered?.slice(startIdx, endIdx);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return ProductFiltered?.length > 0 ? (
    <div className="d:hidden p:block">
      <div className="grid grid-cols-2 gap-3">
        {currentItems.map((items: any, idx: number) => (
          <div key={idx} className="col-span-1">
            <ProductCard Data={items} isSale={true} />
          </div>
        ))}
      </div>

      {/* Phân trang */}
      <div className="mt-4 flex justify-center">
        <Pagination
          current={currentPage}
          total={ProductFiltered.length}
          pageSize={ITEMS_PER_PAGE}
          onChange={handlePageChange}
        />
      </div>
    </div>
  ) : (
    <></>
  );
};

export default TopSellingProductsMobile;

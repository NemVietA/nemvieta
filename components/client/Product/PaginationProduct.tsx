import React, { useState } from "react";
import { Pagination } from "antd"; // Import Pagination từ antd
import ProductCard from "./ProductCard"; // Import component ProductCard
import { ITEMS_PER_PAGE } from "@assets/item";

const ProductList: React.FC<{ products: any[] }> = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentProducts = products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-3">
        {currentProducts.map((item, idx) => (
          <div key={idx} className="col-span-1">
            <ProductCard Data={item} />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Pagination
          current={currentPage}
          pageSize={ITEMS_PER_PAGE}
          total={products.length}
          onChange={handlePageChange}
          showSizeChanger={false}
          className="mt-5"
        />
      </div>
    </div>
  );
};

export default ProductList;

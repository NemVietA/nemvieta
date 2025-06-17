import ProductDetail from "@components/client/Product/ProductDetail";
import ProductDetailLoading from "@components/client/Product/ProductDetailLoading";
import { getDataByTypeProps } from "@lib/get-data";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "CÔNG TY TNHH THƯƠNG MẠI SẢN XUẤT VIỆT Á",
  description: "CÔNG TY TNHH THƯƠNG MẠI SẢN XUẤT VIỆT Á ",
};
const ProductDetailPage = async ({
  params,
}: {
  params: { chitiet: string };
}) => {
  const Data = await getDataByTypeProps("products", "url", params.chitiet);
  const similarProduct = await getDataByTypeProps(
    "products",
    "parentUrl",
    Data[0]?.parentUrl
  );

  return (
    <div>
      <div>
        <ProductDetail Data={Data[0]} SimilarProduct={similarProduct} />
      </div>
    </div>
  );
};

export default ProductDetailPage;

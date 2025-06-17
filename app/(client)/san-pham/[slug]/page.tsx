import DisplayProduct from "@components/client/Product/DisplayProduct";
import { getDataByTypeProps } from "@lib/get-data";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Sản Phẩm | Camera Vstarcam ",
  description: "Camera Vstarcam - An Lành Cho Gia Đình Việt",
};

const DisplayProductPage = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const childrenParam: any = searchParams.children;
  const typeParam: any = searchParams.type;
  let Data: any;
  if (childrenParam !== undefined) {
    Data = await getDataByTypeProps("products", "childrenUrl", childrenParam);
  }
  if (typeParam !== undefined) {
    Data = await getDataByTypeProps("products", "typeUrl", typeParam);
  } else {
    Data = await getDataByTypeProps("products", "parentUrl", params.slug);
  }

  return (
    <div className="md:mt-[-50px]">
      <div className="w-[13 00px] mx-auto">
        <DisplayProduct
          Data={Data}
          Parent={params.slug}
          Children={childrenParam}
          Type={typeParam}
        />
      </div>
    </div>
  );
};

export default DisplayProductPage;

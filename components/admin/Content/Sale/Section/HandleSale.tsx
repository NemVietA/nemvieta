"use client";
import React, { useEffect, useState } from "react";
import { notification } from "antd";
import { useStateProvider } from "@context/StateProvider";
import { useData } from "@context/DataProviders";
import {
  addDataToArrayField,
  updateDocument,
} from "@config/Services/Firebase/FireStoreDB";

const HandleSale = ({ setOpen }: any) => {
  const [discount, setDiscount] = useState<number>(0);
  const [newPrice, setNewPrice] = useState<string>("0");
  const [DataSort, setDataSort] = useState<any>();

  const { setIsRefetch } = useStateProvider();
  const { Products, UpdateId, Sale } = useData();

  useEffect(() => {
    const sort = Products.filter((item: any) => item.id === UpdateId);

    if (sort.length > 0) {
      setDataSort(sort[0]);
    }
  }, [Products, UpdateId]);

  const calculateNewPrice = () => {
    if (discount === 0) {
      setDiscount(0);
      setNewPrice("0");
    } else {
      //delete dot in price
      const newPrice = DataSort?.price.replace(/\./g, "");

      const discountedAmount = (newPrice * discount) / 100;
      const calculatedNewPrice = newPrice - discountedAmount;
      //convert calculatedNewPrice add dot
      const calculatedNewPriceWithDot = calculatedNewPrice
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

      setNewPrice(calculatedNewPriceWithDot);
    }
  };

  const handleDiscard = () => {
    setDiscount(0);
    setNewPrice("0");
  };

  const HandleSubmit = () => {
    const data = {
      sale: {
        discount: discount,
        newPrice: newPrice,
      },
    };
    updateDocument("products", UpdateId, data).then(() => {
      const check = Sale?.salelist.filter((item: any) => item === UpdateId);
      if (check.length === 0) {
        addDataToArrayField("website", "Sale", "salelist", UpdateId).then(
          () => {
            notification["success"]({
              message: "Thành công !",
              description: `Sản phẩm của bạn đã được thêm vào danh sách SALE !`,
            });
            setOpen(false);
            setIsRefetch("CRUD website");
          }
        );
      } else {
        notification["success"]({
          message: `Sản phẩm đã được cập nhật !`,
          description: `Thông tin SALE của sản phẩm ${DataSort.title} đã được cập nhật !`,
        });
      }

      setOpen(false);
      handleDiscard();
    });

    //add id of product to Sale document
  };

  return (
    <button
      onClick={() => HandleSubmit()}
      type="button"
      className="bg-[#df6cad] hover:bg-red-500 focus:outline-none focus:shadow-outline text-white text-md font-medium p-2 rounded w-28 lg:w-44 outline-none"
    >
      Thêm vào danh sách sale
    </button>
  );
};

export default HandleSale;

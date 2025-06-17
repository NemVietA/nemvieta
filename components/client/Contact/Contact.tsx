"use client";
import { useData } from "@context/DataProviders";
import React from "react";
import Input from "./Input";
import { notification } from "antd";
import { useStateProvider } from "@context/StateProvider";
import { IoLocationOutline } from "react-icons/io5";
import { AiFillPhone } from "react-icons/ai";
import AddressDropdown from "@components/items/AddressDropdown";

const Contact = () => {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [cities, setCities] = React.useState<any>("");
  const [districts, setDistricts] = React.useState("");
  const [wards, setWards] = React.useState("");
  const [content, setContent] = React.useState("");
  const { ContactData } = useData();
  const { setIsLoading } = useStateProvider();

  const HandleDiscard = () => {
    setName("");
    setPhone("");
    setEmail("");
    setCities("");
    setDistricts("");
    setWards("");
    setContent("");
  };

  const HandleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    if (!name || !phone) {
      notification["warning"]({
        message: "Thao tác KHÔNG thành công !",
        description: `
           Vui lòng nhập đầy đủ THÔNG TIN !`,
      });
    } else {
      const dataFields = [
        { title: "Họ Tên:", value: name },
        { title: "SĐT:", value: phone },
        { title: "Email:", value: email },
        { title: "Khu vực:", value: `${cities} - ${districts} - ${wards}` },
        { title: "Nội dung lời nhắn:", value: content },
      ];
      let data: any = {};

      dataFields?.forEach((field) => {
        data[field.title] = field.value;
      });

      const response = await fetch(
        "https://formsubmit.co/ajax/vetaucaotocrachgia@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        notification["success"]({
          message: "Thành công !",
          description: `
             Chúng tôi sẽ liên hệ trong thời gian sớm nhất !`,
        });
        setIsLoading(false);
        HandleDiscard();
      } else {
        setIsLoading(false);
        notification["error"]({
          message: "Lỗi !",
          description: `
             Lỗi không xác định !`,
        });
      }
    }
  };

  return (
    <div className="grid p:grid-cols-1 d:grid-cols-3 gap-10 py-5 font-LexendDeca">
      <div className="flex flex-col">
        <h2 className="py-5 text-[20px]  font-semibold">
          Chúng tôi luôn lắng nghe bạn!
        </h2>
        <div className="flex flex-col gap-2">
          <Input type="Họ tên*" value={name} setData={setName} />
          <Input type="Số điện thoại*" value={phone} setData={setPhone} />
          <Input type="Email" value={email} setData={setEmail} />
          <div className="flex flex-col gap-2">
            <label className="font-semibold ">Khu vực</label>
            <AddressDropdown
              setSelectedCity={setCities}
              setSelectedDistrict={setDistricts}
              setSelectedWardName={setWards}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold ">Nội dung lời nhắn</label>
            <textarea
              className="p-2 border border-mainorange outline-none"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="flex justify-center mt-3">
            <div
              className="bg-mainorange hover:bg-orange-600 duration-300 cursor-pointer uppercase px-14 text-white rounded-full py-2"
              onClick={(e) => HandleSubmit(e)}
            >
              Gửi yêu cầu{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-start col-span-2 items-center gap-3 flex-col">
        {/* {Branches.map((item: any, idx: number) => (
          <div className="flex flex-col" key={idx}>
            <h2 className="font-bold text-[18px]">{item.name} </h2>
            <div className="hmax flex flex-col font-LexendDeca font-light  p-3">
              <p>{item.address}</p>
              <p>SĐT: {item.email}</p>
              <p>Email: {item.email}</p>
              <p>(Giờ làm việc: {item.worktime})</p>
            </div>
          </div>
        ))} */}
        <h2 className="font-Montserrat text-[32px] font-light ">Nệm Việt Á</h2>
        <div className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-2">
            <IoLocationOutline />
            <p>ĐC: {ContactData.address}</p>
          </div>
          <div className="flex items-center gap-2">
            <AiFillPhone />
            <p>SĐT:{ContactData.phone} </p>
          </div>
        </div>
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/nemvieta-b328d.appspot.com/o/z4926494641228_3abe23a121fa2166b6d232162a9ce2f4.jpg?alt=media&token=c289d670-4128-44c8-aea4-d51960905106"
            alt="demo"
            className="shadow-sm shadow-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;

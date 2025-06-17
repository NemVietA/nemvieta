import Contact from "@components/client/Contact/Contact";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "CÔNG TY TNHH THƯƠNG MẠI SẢN XUẤT VIỆT Á",
  description: "CÔNG TY TNHH THƯƠNG MẠI SẢN XUẤT VIỆT Á ",
};

const ContactPage = () => {
  return (
    <div>
      <div className="flex flex-col d:w-[1300px] d:mx-auto p:w-auto p:mx-2 py-5">
        <div>
          <div className="uppercase font-bold text-[1.5rem] ">
            <div className="hover:text-mainblue before:w-[50px] before:h-[1px] before:inline-block  before:bg-black before:mr-2 ">
              Liên Hệ
            </div>
          </div>
        </div>
        <>
          <Contact />
        </>
      </div>
    </div>
  );
};

export default ContactPage;

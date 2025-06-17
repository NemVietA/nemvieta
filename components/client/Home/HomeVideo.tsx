"use client";
import { Modal } from "antd";
import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";

const HomeVideo = () => {
  const [OpenModel, setOpenModel] = React.useState(false);
  return (
    <div>
      {/* Giao diện Desktop */}
      <div className="md:bg-slate-100 bg-slate-200 md:py-10 d:w-[1400px] d:mx-auto p:w-auto md:block hidden">
        <div className="font-LexendDeca font-extralight">
          <div className="font-bold font-Questrial text-[17px] text-textHeadSession md:text-[24px] md:pb-2 w-full flex flex-col justify-center items-center">
            <div className="flex items-center uppercase">
              <h2>Khoảnh Khắc Đáng Xem</h2>
              <FaVideo className="ml-2" />
            </div>
            <h3 className="md:text-[15px] font-Questrial font-normal text-center text-[10px] text-gray-400">
              Những khoảng khắc tuyệt vời, không thể quên của Nệm Việt Á
            </h3>
          </div>
          <div className="bg-[url('/image/KhoangKhac.jpg')] bg-no-repeat bg-cover p:h-auto d:h-[50vh] bg-center p:w-auto d:w-[900px] mx-auto mt-2 md:mt-5">
            <div
              className="h-[50vh] flex justify-center items-center text-mainyellow bg-[rgba(0,0,0,0.5)]"
              onClick={() => setOpenModel(true)}
            >
              <div className="text-[50px] p-6 rounded-full border hover:scale-110 duration-300 cursor-pointer border-mainyellow bg-[rgba(255,255,255,0.5)]">
                <BsFillPlayFill />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Giao diện Mobile */}
      <div className="md:hidden bg-slate-200 py-5 px-3">
        <div className="font-LexendDeca font-extralight">
          <div className="font-bold font-Questrial text-[17px] text-textHeadSession text-[20px] text-center">
            <div className="flex items-center justify-center uppercase">
              <h2>Khoảnh Khắc Đáng Xem</h2>
              <FaVideo className="ml-2" />
            </div>
            <h3 className="font-Questrial font-normal text-center text-[12px] text-gray-400">
              Những khoảng khắc tuyệt vời, không thể quên của Nệm Việt Á
            </h3>
          </div>
          <div className="bg-[url('/image/KhoangKhac.jpg')] bg-no-repeat bg-cover bg-center h-[200px] sm:h-[300px] w-full mx-auto mt-2">
            <div
              className="h-full flex justify-center items-center text-mainyellow bg-[rgba(0,0,0,0.5)]"
              onClick={() => setOpenModel(true)}
            >
              <div className="text-[40px] sm:text-[50px] p-4 rounded-full border hover:scale-110 duration-300 cursor-pointer border-mainyellow bg-[rgba(255,255,255,0.5)]">
                <BsFillPlayFill />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <Modal
        open={OpenModel}
        closable={false}
        width={1000}
        onCancel={() => setOpenModel(false)}
        footer={false}
      >
        <iframe
          width="100%"
          height="600"
          src="https://www.youtube.com/embed/Xna9JIie1L0?si=zlOw1aDMNmA_oH38"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Modal>
    </div>
  );
};

export default HomeVideo;

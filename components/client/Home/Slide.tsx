"use client";
import React, { useEffect, useState } from "react";
import "swiper/css";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { getAllDocuments } from "@config/Services/Firebase/FireStoreDB";

const Slide = () => {
  const [ItemActive, setItemActive] = useState(0);
  const [Slides, setSlides] = useState([]);
  useEffect(() => {
    const idInterval = setTimeout(() => {
      handleNext();
    }, 5000);
    return () => {
      clearTimeout(idInterval);
    };
  }, [ItemActive, Slides]);

  useEffect(() => {
    getAllDocuments("slide").then((data: any) => {
      setSlides(data?.reverse());
    });
  }, []);

  const handleNext = () => {
    setItemActive((prev) => {
      let itemActive = prev + 1;
      if (itemActive >= Slides?.length) {
        itemActive = 0;
      }
      return itemActive;
    });
  };

  const handlPrev = () => {
    let itemActive = ItemActive - 1;
    if (itemActive < 0) {
      itemActive = Slides?.length ?? 0 - 1;
    }
    setItemActive(itemActive);
  };

  return (
    // <div className="grid grid-cols-7 gap-2">
    //   <div className="col-span-5">
    //     <div>
    //       <Swiper
    //         spaceBetween={30}
    //         loop={true}
    //         centeredSlides={true}
    //         slidesPerView={1}
    //         slidesPerGroup={1}
    //         autoplay={{
    //           delay: 2500,
    //           disableOnInteraction: false,
    //         }}
    //         navigation={true}
    //         modules={[Autoplay]}
    //         className="mySwiper"
    //       >
    //         <div>
    //           {Slides.map((item: any, index: number) => (
    //             <SwiperSlide key={index}>
    //               <Link
    //                 href={`/san-pham/nem?type=nem-cao-su`}
    //                 className="w-full h-[600px] overflow-hidden cursor-pointer"
    //               >
    //                 <img
    //                   src={item.image}
    //                   alt="slide"
    //                   className="w-full h-full hover:scale-105 duration-300 object-cover "
    //                 />
    //               </Link>
    //             </SwiperSlide>
    //           ))}
    //         </div>
    //       </Swiper>
    //     </div>
    //   </div>
    //   <div className="grid grid-rows-2 gap-2 col-span-2">
    //     <div className="w-full h-full rounded-lg">
    //       <img
    //         alt="slide1"
    //         src = "https://drive.google.com/thumbnail?id=1bP5kylXaDh7PwTeKrNBHJ0yUUUolGpL5&sz=w1000"
    //         className="w-full rounded-lg"
    //       />
    //     </div>
    //     <div className="w-full h-full">
    //       <img
    //         src="https://firebasestorage.googleapis.com/v0/b/nemvieta-b328d.appspot.com/o/GIAO%20H%C3%80NG%20NHANH%202.png?alt=media&token=b357b68a-32e2-4d0c-a905-731809825324"
    //         alt="slide2"
    //         className="w-full"
    //       />
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="slider reposive-h-slider md:mt-[-50px] mt-[64px]">
        <div className="list">
          {Slides.map((item: any, index: number) => (
            <div
              key={index}
              className={ItemActive === index ? "item active" : "item"}
            >
              <img src={item.image} />
              {/* <div className="content">
                  <p className="text-mainblue opacity-80 font-medium">Nệm</p>
                  <h2 className="text-mainblue opacity-80">Việt Á</h2>
                  <p className="text-mainblue opacity-80 font-medium">
                    “Chất lượng cuộc sống” không chỉ là một câu slogan, mà còn là triết lý hoạt động của chúng tôi. Tại Nệm Việt Á, chúng tôi hiểu rằng giấc ngủ không chỉ đơn thuần là nghỉ ngơi mà còn là nguồn năng lượng cho một ngày mới. Chính vì vậy, mỗi chiếc nệm mà chúng tôi sản xuất đều được chăm chút tỉ mỉ, từ nguyên liệu cho đến quy trình sản xuất, nhằm mang lại giá trị tối ưu cho Quý khách hàng.
                  </p>
                </div> */}
            </div>
          ))}
        </div>
        <button
            className="text-black bg-transparent hover:bg-gray-200 focus:ring focus:ring-gray-300 p-2 rounded-full"
            onClick={handleNext}
          >
            <AiOutlineRight />
          </button>
        <div className="thumbnail hidden md:flex">
          {Slides.map((item: any, index: number) => (
            <div
              key={index}
              onClick={() => {
                setItemActive(index);
              }}
              className={ItemActive === index ? "item active" : "item"}
            >
              <img src={item.image} />
              {/* <div className="content">
                Name Slider
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slide;

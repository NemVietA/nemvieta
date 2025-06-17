"use client";
import { useData } from "@context/DataProviders";
import React from "react";
import ItemIntro from "./Item";

const Introduction = () => {
  const { Introduction } = useData();
  const markup = { __html: Introduction?.content };
  const items = [
    {
      value: 4,
      unit: "Năm",
      label: "Thành lập",
    },
    {
      value: 3,
      unit: "Cửa hàng",
      label: "Chi nhánh",
    },
    {
      value: "1500+",
      unit: "Khách hàng",
      label: "Chúng tôi đã phục vụ",
    },
    {
      value: 2,
      unit: "Ngày",
      label: "Thời gian giao hàng",
    },
  ];
  return (
    <div>
      <div className="w-full lg:h-[150vh] h-[50vh] relative">
        <img
          src="image/intro-company-image.png"
          alt="ảnh mở đầu giới thiệu công ty"
          className="w-full h-full object-cover"
        ></img>
        <span className="absolute text-white lg:top-[15%] top-[35%] left-[15%] font-[1000px] ">
          <div className="lg:text-[30px] text-[15px] bg-[#2c96ff27] text-right uppercase font-[100px] px-2 animate__animated animate__fadeInLeft animate__slow">
            <i>Khám phá</i>
          </div>
          <div className="lg:text-[90px] text-[50px] font-[900px] font-Questrial animate__animated animate__fadeInLeft delay-custom animate__delay-2s animate__slow">
            NỆM VIỆT Á
          </div>
        </span>
        <div className="absolute w-full h-full bg-gradient-to-t from-slate-200 via-transparent to-transparent top-0"></div>
      </div>
      <div className="relative flex justify-end h-[200px]">
        <div className="border-t-2   border-gray-400 w-full  absolute top-1/2 "></div>
        <div className="lg:w-[30%] lg:text-[30px] flex items-center mr-[20%] z-[0] bg-[#e2e8f0] px-3 font-Questrial justify-center">
          <i>
            Chúng tôi luôn chú trọng đem lại những sản phẩm chất lượng, xứng
            đáng với niềm tin của khách hàng
          </i>
        </div>
      </div>
      <div className="flex justify-center mt-[7rem]">
        <div className="d:w-[1400px] flex flex-wrap relative">
          <div className="w-1/3 hidden lg:block"></div>
          <div
            style={{
              boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.2)",
              borderRadius: "8px",
            }}
            className=" lg:w-[40%] w-full p-5 bg-slate-200  overflow-hidden lg:absolute top-1/2 lg:-translate-y-1/2 rounded-3xl"
          >
            <h2 className="font-Questrial font-bold lg:text-[24px] text-[17px] text-textHeadSession text-center">
              NỆM VIỆT Á
            </h2>
            <h3 className="font-Questrial font-bold lg:text-[15px] text-[10px] text-textHeadSession text-center">
              <i>"Chất lượng cuộc sống"</i>
            </h3>
            <div
              className="font-Questrial font-medium lg:text-[15px] text-[10px] lg:leading-5"
              dangerouslySetInnerHTML={markup}
            ></div>
          </div>
          <div className="lg:w-2/3 w-full">
            <img
              src="image/anhcty.jpg"
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="lg:py-64 pt-20 flex flex-wrap relative justify-center">
        <img
          src="image/bedroom-7132435_1280.jpg"
          className=" object-cover w-full lg:h-[800px]"
        ></img>
        <div className="absolute lg:text-[25px] text-[15px] text-white left-[10%] lg:top-[380px] top-[8rem] font-[900px] font-Questrial">
          <i>"Mỗi Sự Hài Lòng Của Bạn Là Động Lực Cho Chúng Tôi Phát Triển"</i>
          <div className="lg:w-1/2 w-1/3  bg-[#ddd9d657] p-5 lg:text-[20px] hidden lg:block text-[10px] text-black">
            <p>
              Sản phẩm nệm của chúng tôi được thiết kế với chất lượng vượt trội,
              mang đến sự thoải mái và hỗ trợ tối ưu cho giấc ngủ của bạn. Với
              nguyên liệu cao cấp và công nghệ sản xuất hiện đại, nệm giúp nâng
              đỡ cơ thể đúng cách, giảm áp lực và mang lại cảm giác thư giãn
              sâu. Chúng tôi cam kết đem đến trải nghiệm khách hàng tuyệt vời,
              từ quy trình mua sắm trực tuyến dễ dàng cho đến dịch vụ giao hàng
              nhanh chóng và chính sách bảo hành rõ ràng. Sự hài lòng của bạn
              chính là ưu tiên hàng đầu của chúng tôi.
            </p>
          </div>
        </div>
        <div className="lg:bg-white justify-center lg:p-5 gap-1 lg:absolute lg:w-1/2 w-full bottom-[100px] flex flex-row flex-wrap lg:flex-nowrap lg:justify-evenly">
          {items.map((item: any, idx) => {
            return (
              <React.Fragment key={idx}>
                <ItemIntro item={item} />
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center flex-row-reverse my-[7rem]">
        <div className=" flex flex-wrap relative w-full">
          <div className=" lg:w-[30%] w-full p-5 bg-slate-200  overflow-hidden lg:absolute right-40 top-1/2 lg:-translate-y-1/2">
            <h2 className="font-Questrial font-bold lg:text-[24px] uppercase text-[17px] text-textHeadSession text-center">
              Một Bước Tiến Của Công Ty,<br></br> Thêm một Mảnh Ghép Để Xây Dựng
              Xã Hội
            </h2>
            <div className="font-Questrial font-medium lg:text-[18px] text-[10px] lg:leading-8">
              Nệm Việt Á tự hào là một thương hiệu được xây dựng trên nền tảng
              sự tin tưởng và ủng hộ mạnh mẽ từ người tiêu dùng. Chính niềm tin
              đó đã thúc đẩy chúng tôi không chỉ làm tốt công việc sản xuất nệm
              chất lượng, mà còn xác định rõ trách nhiệm với cộng đồng mà chúng
              tôi phục vụ. Với phương châm “Lợi nhuận vì cộng đồng”, mỗi đồng
              lợi nhuận mà công ty thu được đều được chúng tôi dành một phần để
              đóng góp vào các hoạt động xã hội, thiện nguyện. Chúng tôi tham
              gia và đồng hành cùng các chương trình thiện nguyện, hỗ trợ người
              nghèo, giúp đỡ trẻ em có hoàn cảnh khó khăn, trao nhà tình nghĩa
              và quyên góp cho các khu vực chịu ảnh hưởng bởi thiên tai. Công ty
              còn tổ chức nhiều hoạt động từ thiện như khám chữa bệnh miễn phí
              cho những vùng khó khăn, hỗ trợ các nạn nhân bị ảnh hưởng bởi chất
              độc màu da cam, và tham gia các chương trình bảo vệ sức khỏe cộng
              đồng. Những đóng góp này không chỉ giúp Nệm Việt Á phát triển bền
              vững mà còn góp phần nhỏ bé trong việc cải thiện đời sống và nâng
              cao chất lượng cộng đồng. Chúng tôi tin rằng sự thành công của
              doanh nghiệp không chỉ đo bằng lợi nhuận, mà còn qua những giá trị
              tốt đẹp mà chúng tôi mang lại cho xã hội.
            </div>
          </div>
          <div className="lg:w-2/3 w-full lg:min-h-[800px] bg-black">
            <img
              src="image/anh-tu-thien.png"
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
          <div className="w-1/3 hidden lg:block"></div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;

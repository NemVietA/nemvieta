import React from "react";
import { FaStar } from "react-icons/fa";

interface Certificate {
  id: number;
  src: string;
  alt: string;
  name: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    src: "/image/chungnhan.jpg",
    alt: "Chứng chỉ 1",
    name: "Top 20 Doanh Nghiêp",
  },
  {
    id: 2,
    src: "/image/cup.jpg",
    alt: "Chứng chỉ 2",
    name: "Cup Top 20 Doanh Nghiệp",
  },
  {
    id: 3,
    src: "/image/chinhanh.jpg",
    alt: "Chứng chỉ 3",
    name: "Chi Nhánh Khắp Cả Nước",
  },
  {
    id: 4,
    src: "/image/thiennguyen.png",
    alt: "Chứng chỉ 4",
    name: "Trao Nhà Tình Thương",
  },
];

const Achievements: React.FC = () => {
  return (
    <div className="justify-center relative h-[144px] flex bg-slate-100">
      <div
        className="bg-white rounded-lg py-2 px-4 lg:w-6/12 md:10/12 hidden md:block absolute top-[-10px] animate__shakeY animate__infinite animate__animated custom-animation"
        style={{
          boxShadow:
            "0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.5)",
          maxWidth: "100vw",
        }}
      >
        <h2 className="text-xl font-bold pb-2 uppercase font-Questrial text-gray-800 mb-4 flex items-center border-b-2 border-b-gray-300">
          <span className="material-icons text-red-500 mr-2 ">
            <FaStar />
          </span>
          Chúng Tôi Tự Hào
        </h2>
        <div className="flex justify-evenly items-center gap-10 pb-6 overflow-x-scroll md:overflow-x-scroll lg:overflow-hidden">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="md:w-[140px] md:h-[70px]  px-4 rounded-lg  flex items-center justify-center border-gray-300 border-2 relative animate__backInRight animate__animated"
            >
              <img
                src={cert.src}
                alt={cert.alt}
                className=" max-w-full max-h-full object-contain w-[160px] h-[70px] rounded-md"
              />
              <span
                className="absolute bottom-[-20px] font-bold w-[160px] text-center"
                style={{ fontSize: "10px" }}
              >
                {cert.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center md:hidden w-full h-[154px] pt-4 bg-slate-200">
        <span className="text-black flex justify-center font-bold items-center w-11/12">
          <span className="text-red-500 text-[17px] ">
            <FaStar />
          </span>
          <h2 className="ml-2 text-textHeadSession uppercase font-Questrial font-bold text-[17px] pt-1">
            Tự Hào Của Chúng Tôi
          </h2>
        </span>
        <div className="flex px-1 pb-5 pt-3 justify-around w-full overflow-x-hidden gap-1">
          {certificates.map((cert, index) =>
            index !== 3 ? (
              <div
                key={cert.id}
                className="md:w-52 md:h-24 w-1/2 px-4 shadow-lg bg-white relative rounded-md animate__backInRight animate__animated"
                style={{ border: "1px solid #b5b1b1" }}
              >
                <img
                  src={cert.src}
                  alt={cert.alt}
                  className="h-full w-full object-contain "
                  style={{}}
                />
                <span
                  className="absolute bottom-0 left-0 w-full text-center font-bold"
                  style={{ fontSize: "8px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                >
                  {cert.name}
                </span>
              </div>
            ) : (
              <React.Fragment key={cert.id}></React.Fragment>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Achievements;

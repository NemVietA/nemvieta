import Link from "next/link";
import React from "react";
import localFont from "next/font/local";

const UTMFleur = localFont({
  src: "../../../assets/fonts/UTMFleur.ttf",
  display: "swap",
});

const UTMAmerican = localFont({
  src: "../../../assets/fonts/UTMAmericanSans.ttf",
  display: "swap",
});

const ShortIntro = () => {
  return (
    <div
      id="intro"
      className="bg-slate-200 md:bg-transparent grid grid-cols-4 justify-between lg:mt-10 items-center d:w-[1400px] mx-auto p:w-auto scroll-middle-view"
    >
      {" "}
      <div className="flex gap-2 py-2 p:px-0 d:flex-row p:flex-col md:mt-10 col-span-12 lg:col-span-8 ">
        <div className=" flex-[45%] md:min-h-[500px] block ">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/nemvieta-b328d.appspot.com/o/z4926213423129_60764889b887dc10fde5ab3019538769.jpg?alt=media&token=6328da6b-9e6a-4c3d-a618-54290e562f79"
            alt="banner"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className=" flex-[55%] p:px-0 d:pl-10">
          {/* <h3 className={`font-UTMFleur text-[40px] ${UTMFleur.className}`}>
            Giới thiệu
          </h3> */}
          <h2
            className={`md:hidden font-bold text-center leading-7 uppercase text-textHeadSession font-Questrial text-[17px]`}
          >
            Công ty TNHH TM & SX Nệm Việt Á
          </h2>
          <h2
            className={`hidden md:block font-bold text-textHeadSession font-Questrial text-[30px] leading-7 uppercase `}
          >
            Công ty TNHH TM & SX Nệm Việt Á
          </h2>
          <div
            className="indent-3 mt-4 p-2 rounded-md bg-blue-50 font-Questrial font-medium"
            style={{ border: "4px solid #3030ff" }}
          >
            <p>
              <span className="lg:hidden">
                <p>
                  <b>Công ty TNHH TM & SX Việt Á</b> đã không ngừng nghiên cứu
                  và sản xuất để đưa ra thị trường những chiếc nệm êm ái nhất,
                  những tấm chăn ấm áp nhất và các sản phẩm chăm sóc giấc ngủ.
                  Mục tiêu của công ty là giúp người tiêu dùng có được những
                  phút giây nghỉ ngơi, thư giãn sau một ngày dài làm việc mệt
                  nhọc. Đây là một sứ mệnh tưởng chừng như đơn giản nhưng chứa
                  đựng cả tâm huyết của ...
                </p>
              </span>
              <span className="hidden lg:inline-block">
                <p>
                  <b>Công ty TNHH TM & SX Việt Á</b> đã không ngừng nghiên cứu
                  và sản xuất để đưa ra thị trường những chiếc nệm êm ái nhất,
                  những tấm chăn ấm áp nhất và các sản phẩm chăm sóc giấc ngủ.
                  Mục tiêu của công ty là giúp người tiêu dùng có được những
                  phút giây nghỉ ngơi, thư giãn sau một ngày dài làm việc mệt
                  nhọc. Đây là một sứ mệnh tưởng chừng như đơn giản nhưng chứa
                  đựng cả tâm huyết của người làm nghề, với mong muốn mang đến
                  sản phẩm tốt và giá cả phải chăng mà không ảnh hưởng đến sức
                  khỏe của khách hàng.
                </p>
                <p>
                  <b>Điểm khác biệt</b> khi đến với{" "}
                  <b>công ty TNHH TM & SX Việt Á </b>
                  là công ty luôn đặt chất lượng lên hàng đầu. Khách hàng không
                  phải băn khoăn đánh đổi sức khỏe chỉ vì giá thành sản phẩm.
                  Tập thể công ty đã góp phần quan trọng để tạo ra giá trị thực
                  thụ cho cộng đồng, đảm bảo cung cấp các sản phẩm không chỉ
                  chất lượng mà còn đa dạng về mẫu mã và phù hợp với nhiều đối
                  tượng người tiêu dùng.
                </p>
                <p>
                  Ngoài việc <b>chú trọng vào chất lượng</b>, nệm Việt Á còn đặt
                  <b> chữ tín và sự minh bạch</b> trong kinh doanh là yếu tố
                  then chốt để phát triển bền vững. Chính điều này đã giúp công
                  ty phát triển như ngày hôm nay, xây dựng được niềm tin và sự
                  hài lòng từ phía khách hàng.
                </p>
              </span>
              <Link href={`/gioi-thieu`} className="inline-block">
                <div className="text-customBgHeader font-bold p-0 hover:text-red-700 md:ml-[0rem] ml-[-1rem] cursor-pointer">
                  Đọc thêm
                </div>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortIntro;

import Footer from "@components/layout/client-layout/Footer";
import Header from "@components/layout/client-layout/Header";
import Hotline from "@components/layout/client-layout/Hotline";
import OnTop from "@components/layout/client-layout/OnTop";
import React from "react";

type ClientLayoutProps = {
  children: React.ReactNode;
};

const layout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <div className="bg-slate-200 font-LexendDeca font-extralight">
      <Header />
      <div className="mt-[50px]">{children}</div>
      <OnTop />
      <Hotline />
      {/* <TopFooter /> */}
      <Footer />
    </div>
  );
};

export default layout;

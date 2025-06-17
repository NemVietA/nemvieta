import React from "react";

type ClientLayoutProps = {
  children: React.ReactNode;
};

const layout: React.FC<ClientLayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default layout;

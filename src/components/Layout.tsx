import { ReactNode } from "react";
import Header from "./Header";

type LayoutPropType = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutPropType) => {
  return (
    <>
      <Header />

      <main>{children}</main>
    </>
  );
};

export default Layout;

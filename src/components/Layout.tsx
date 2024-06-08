import { ReactNode } from "react";
import Header from "./Header";

type LayoutPropType = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutPropType) => {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-screen-md p-6">{children}</main>
    </>
  );
};

export default Layout;

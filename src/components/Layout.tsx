import { ReactNode } from "react";
import Header from "./Header";
import Fab from "./Fab";

type LayoutPropType = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutPropType) => {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-screen-md p-6">{children}</main>

      <Fab />
    </>
  );
};

export default Layout;

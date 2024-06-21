import { ReactNode, useEffect } from "react";
import Header from "./Header";
import { useAtom } from "jotai";
import { darkAtom } from "@/utils/atoms/darkAtoms";

type LayoutPropType = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutPropType) => {
  const [darkMode] = useAtom(darkAtom);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <>
      <Header />

      <main className="mx-auto max-w-screen-md p-6">{children}</main>
    </>
  );
};

export default Layout;

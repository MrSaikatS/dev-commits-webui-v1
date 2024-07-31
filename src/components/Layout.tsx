import { ReactNode, useEffect } from "react";
import Header from "./Header";
import { useAtom } from "jotai/react";
import { darkAtom } from "@/utlis/atoms/darkAtom";

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

      <main>{children}</main>
    </>
  );
};

export default Layout;

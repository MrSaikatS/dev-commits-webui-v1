import { useRouter } from "next/router";
import Nav from "./Nav";

const Header = () => {
  const pathName = useRouter().pathname;

  if (pathName === "/" || pathName.startsWith("/profile")) {
    return <Nav />;
  } else {
    return <></>;
  }
};

export default Header;

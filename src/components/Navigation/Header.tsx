import { useRouter } from "next/router";
import Nav from "./Nav";

const Header = () => {
  const pathname = useRouter().pathname;

  if (pathname === "/" || pathname.startsWith("/app")) {
    return <Nav />;
  } else {
    return <></>;
  }
};

export default Header;

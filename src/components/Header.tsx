import { useRouter } from "next/router";
import Nav from "./Nav";

const Header = () => {
  const router = useRouter();

  if (router.pathname === "/" || router.pathname.startsWith("/register")) {
    return <></>;
  } else {
    return <Nav />;
  }
};

export default Header;

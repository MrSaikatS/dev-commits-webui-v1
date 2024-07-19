import { useRouter } from "next/router";
import Nav from "./Nav";

const Header = () => {
  const router = useRouter();

  if (router.pathname === "/auth/login" || router.pathname === "/auth/signup") {
    return <></>;
  } else {
    return <Nav />;
  }
};

export default Header;

import { useRouter } from "next/router";
import Nav from "./Nav";

const Header = () => {
  const router = useRouter();

  if (router.pathname.startsWith("/app")) {
    return <Nav />;
  } else {
    return <></>;
  }
};

export default Header;

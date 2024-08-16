import { useRouter } from "next/router";
import Nav from "./Nav";

const Header = () => {
  const router = useRouter();

  if (
    router.pathname === "/auth/register" ||
    router.pathname === "/auth/signin"
  ) {
    return <></>;
  } else {
    return <Nav />;
  }
};

export default Header;

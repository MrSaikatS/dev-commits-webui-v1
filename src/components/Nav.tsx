import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import Link from "next/link";
import UserInformation from "./button/UserInformation";
import UserLogoutBtn from "./button/UserLogoutBtn";

const Nav = () => {
  return (
    <>
      <Navbar isBlurred isBordered maxWidth="lg">
        <NavbarBrand className="text-2xl font-semibold">
          <Link href={"/app"}>DEV Commits</Link>
        </NavbarBrand>

        <NavbarContent justify="end" className="sm:hidden">
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarContent justify="center" className="hidden sm:flex">
          <NavbarItem>
            <Link href={"/app"}>Home</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href={"/app/profile"}>Profile</Link>
          </NavbarItem>
          <NavbarItem>
            <UserInformation />
          </NavbarItem>
          <NavbarItem>
            <UserLogoutBtn />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="items-center">
          <NavbarMenuItem>
            <Link href={"/app"}>Home</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href={"/app/profile"}>Profile</Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default Nav;

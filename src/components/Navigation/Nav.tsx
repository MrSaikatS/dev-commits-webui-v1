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
import LogoutButton from "../Buttons/LogoutButton";
import LoginUserImage from "../Buttons/LoginUserImage";
import Darkmode from "../Buttons/Darkmode";

const Nav = () => {
  return (
    <>
      <Navbar
        isBlurred
        isBordered
        maxWidth="lg">
        <NavbarBrand className="text-2xl font-semibold">
          <Link href={"/app"}>DEV Commits</Link>
          <div className="ml-3 mt-1">
            <Darkmode />
          </div>
        </NavbarBrand>

        <NavbarContent
          justify="end"
          className="sm:hidden">
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarContent
          justify="end"
          className="hidden sm:flex">
          <NavbarItem>
            <LoginUserImage />
          </NavbarItem>
          <NavbarItem>
            <Link href={"/app"}>Home</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href={"/app/profile"}>Profile</Link>
          </NavbarItem>
          <LogoutButton />
        </NavbarContent>

        <NavbarMenu className="items-center">
          <NavbarItem>
            <LoginUserImage />
          </NavbarItem>
          <NavbarMenuItem>
            <Link href={"/app"}>Home</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href={"/app/profile"}>Profile</Link>
          </NavbarMenuItem>
          <LogoutButton />
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default Nav;

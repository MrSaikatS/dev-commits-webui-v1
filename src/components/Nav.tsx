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
import DarkMode from "./DarkMode";

const Nav = () => {
  return (
    <>
      <Navbar
        isBlurred
        isBordered
        maxWidth="md">
        <NavbarBrand className="text-2xl font-semibold">
          <Link href={"/app"}>DEV Commits</Link>
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
            <DarkMode />
          </NavbarItem>
          <NavbarItem>
            <Link href={"/app"}>Home</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href={"/app/profile"}>Profile</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href={"/app/createPost"}>Create</Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="items-center">
          <NavbarMenuItem>
            <DarkMode />
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href={"/app"}>Home</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href={"/app/profile"}>Profile</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href={"/app/createPost"}>Create</Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default Nav;

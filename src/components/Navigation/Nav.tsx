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
            <Link href={"/app"}>Home</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href={"/app/profile"}>Profile</Link>
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

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
import Darkmode from "./Button/Darkmode";
import Logoutbtn from "./Button/Logoutbtn";
import { Input } from "@nextui-org/input";
import { Search } from "lucide-react";

const Nav = () => {
  return (
    <>
      <Navbar isBlurred isBordered maxWidth="lg">
        <NavbarBrand className="text-2xl font-semibold">
          <Link href={"/"}>DEV Commits</Link>
        </NavbarBrand>
        <NavbarBrand className="text-2xl font-semibold">
          <Input
            placeholder="Search user"
            endContent={
              <>
                <button>
                  <Search size={20} />
                </button>
              </>
            }
          />
        </NavbarBrand>

        <NavbarContent justify="end" className="sm:hidden">
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarContent justify="end" className="hidden sm:flex">
          <NavbarItem>
            <Darkmode />
          </NavbarItem>
          <NavbarItem>
            <Logoutbtn />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="items-center">
          <NavbarMenuItem>
            <Darkmode />
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Logoutbtn />
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default Nav;

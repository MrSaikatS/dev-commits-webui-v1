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
import UserBtnProfle from "./Button/UserBtnProfle";

const Nav = () => {
  return (
    <>
      <Navbar className="" isBlurred isBordered maxWidth="xl">
        <NavbarBrand className="text-2xl font-semibold">
          <Link href={"/"}>DEV Commits</Link>
        </NavbarBrand>
        <NavbarBrand className="text-2xl font-semibold">
          {/* <Input
            className="lg:w-[500px] w-40"
            placeholder="Search user"
            endContent={
              <>
                <button>
                  <Search size={20} />
                </button>
              </>
            }
          /> */}
        </NavbarBrand>

        <NavbarContent justify="end" className="sm:hidden">
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarContent justify="end" className="hidden sm:flex">
          <NavbarItem>
            <UserBtnProfle />
          </NavbarItem>
          <NavbarItem>
            <Darkmode />
          </NavbarItem>
          <NavbarItem>
            <Logoutbtn />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="items-center justify-center">
          <NavbarMenuItem>
            <UserBtnProfle />
          </NavbarMenuItem>
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

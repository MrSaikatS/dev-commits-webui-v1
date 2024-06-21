import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";
import { Image } from "@nextui-org/image";
import { LogOut, Power } from "lucide-react";
import { toast } from "sonner";

const UserNav = () => {
  const UserLogouts = () => {
    console.log("dgdhbd");

    // Toast successfully Code

    toast.info("User Logout Successfully.", {
      icon: (
        <LogOut
          size={20}
          color="blue"
        />
      ),

      // Toast error Code

      // toast.error("User Logout Successfully.", {
      // icon: (
      //   <LogOut
      //     size={20}
      //     color="blue"
      //   />
      // ),
    });

    // This Code Excusion When Backend is reday
    // const promise = () =>
    //   new Promise((resolve) =>
    //     setTimeout(() => resolve({ name: "Sonner" }), 2000),
    //   );

    // toast.promise(promise, {
    //   loading: "Loading...",
    //   success: (data) => {
    //     return `${data.name} toast has been added`;
    //   },
    //   error: "Error",
    // });
  };

  return (
    <>
      <div className="flex-row items-center justify-center gap-4 sm:flex">
        <div className="flex items-center justify-center">
          <Tooltip
            showArrow={true}
            content="User Profile Pic"
            color="primary"
            shadow="md"
            radius="lg">
            <Image
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              className="h-6 w-6 text-tiny"
            />
          </Tooltip>
        </div>
        <Tooltip
          showArrow={true}
          content="User FirstName"
          color="primary"
          shadow="md"
          radius="lg">
          <div className="">Sourav</div>
        </Tooltip>
        <div className="flex items-center justify-center">
          <Tooltip
            showArrow={true}
            content="LogOut User"
            color="primary"
            shadow="md"
            radius="lg">
            <Button
              onPress={UserLogouts}
              variant="light"
              isIconOnly
              size="sm">
              <Power />
            </Button>
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default UserNav;

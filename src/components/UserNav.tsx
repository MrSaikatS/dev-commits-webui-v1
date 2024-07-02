import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";
import { Image } from "@nextui-org/image";
import { LogOut, Power } from "lucide-react";
import { toast } from "sonner";
import { sdk } from "@/utils/sdk";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { readMe } from "@directus/sdk";

const UserNav = () => {
  const { data } = useQuery({
    queryKey: ["username"],
    queryFn: async () => {
      const req = await sdk.request(
        readMe({
          fields: ["*"],
        }),
      );
      return req;
    },
  });
  // console.log(data?.first_name);

  const router = useRouter();
  const UserLogouts = async () => {
    await sdk.logout();
    toast.info("User Logout Successfully.", {
      icon: (
        <LogOut
          size={20}
          color="blue"
        />
      ),
    });
    router.replace("/");
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
              src={
                data?.avatar === null
                  ? "/user.png"
                  : `http://localhost:8055/assets/${data?.avatar}`
              }
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
          <div className="">{data?.first_name}</div>
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

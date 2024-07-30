import { sdk } from "@/utlis/sdk";
import { logout } from "@directus/sdk";
import { Button } from "@nextui-org/button";
import { LogOut } from "lucide-react";
import { useRouter } from "next/router";
import { toast } from "sonner";

const UserLogoutBtn = () => {
  const router = useRouter();
  // logoutfunction

  const userLogoutFn = async () => {
    await sdk.request(logout("", "session"));
    toast.success("LogOut SuucessFully");

    router.replace("/");
  };

  return (
    <div>
      <Button
        onPress={userLogoutFn}
        color="secondary"
        variant="ghost"
        size="lg"
        isIconOnly
      >
        <LogOut />
      </Button>
    </div>
  );
};

export default UserLogoutBtn;

import { Button } from "@nextui-org/button";
import { LogOut } from "lucide-react";
import { useRouter } from "next/router";

const LogoutButton = () => {
  const router = useRouter();

  const logoufun = () => {
    router.push("/auth/login");
  };

  return (
    <div>
      <Button
        isIconOnly
        variant="solid"
        size="md"
        onPress={logoufun}
        className="hover:bg-fuchsia-700">
        <LogOut />
      </Button>
    </div>
  );
};

export default LogoutButton;

import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Power } from "lucide-react";

const UserNav = () => {
  return (
    <>
      <div className="flex-row items-center justify-center gap-1 sm:flex">
        <div className="flex items-center justify-center">
          <Image
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            className="h-6 w-6 text-tiny"
          />
        </div>
        <div className="">Sourav</div>
        <div className="flex items-center justify-center">
          <Button
            variant="light"
            isIconOnly
            size="sm">
            <Power />
          </Button>
        </div>
      </div>
    </>
  );
};

export default UserNav;

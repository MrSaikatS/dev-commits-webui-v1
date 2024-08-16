import { Button } from "@nextui-org/button";
import { LogOut } from "lucide-react";

const Logoutbtn = () => {
  return (
    <>
      <div className="">
        <Button isIconOnly>
          <LogOut size={20} />
        </Button>
      </div>
    </>
  );
};

export default Logoutbtn;

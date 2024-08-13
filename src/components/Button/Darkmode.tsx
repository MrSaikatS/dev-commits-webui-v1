import { Button } from "@nextui-org/button";
import { Moon, Sun } from "lucide-react";

import { useTheme } from "next-themes";

const Darkmode = () => {
  const { setTheme } = useTheme();
  return (
    <>
      <div className="space-x-2">
        <Button isIconOnly onClick={() => setTheme("light")}>
          <Sun />
        </Button>
        <Button isIconOnly onClick={() => setTheme("dark")}>
          <Moon />
        </Button>
      </div>
    </>
  );
};

export default Darkmode;

import { darkmodeatom } from "@/utlis/atom/Darkmodeatom";
import { Button } from "@nextui-org/button";
import { useAtom } from "jotai/react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect } from "react";

const Darkmode = () => {
  const [darkMode, setDarkMode] = useAtom(darkmodeatom);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <>
      <div className="">
        <Button
          variant="solid"
          isIconOnly
          size="md"
          onPress={() => setDarkMode(!darkMode)}>
          {darkMode ? <MoonIcon /> : <SunIcon />}
        </Button>
      </div>
    </>
  );
};

export default Darkmode;

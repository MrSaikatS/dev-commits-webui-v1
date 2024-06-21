import { darkAtom } from "@/utils/atoms/darkAtoms";
import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";
import { useAtom } from "jotai";
import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect } from "react";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useAtom(darkAtom);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <>
      <Tooltip
        content="DarkMode Toogle"
        color="primary"
        shadow="md"
        radius="lg"
        showArrow={true}>
        <Button
          variant="light"
          isIconOnly
          size="sm"
          onPress={() => setDarkMode(!darkMode)}>
          {darkMode ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Tooltip>
    </>
  );
};

export default DarkMode;

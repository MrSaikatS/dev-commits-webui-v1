import { darkAtom } from "@/utlis/atoms/darkAtom";
import { Button } from "@nextui-org/button";
import { useAtom } from "jotai/react";
import { MoonIcon, SunIcon } from "lucide-react";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useAtom(darkAtom);
  return (
    <>
      <Button
        variant="light"
        isIconOnly
        size="sm"
        onPress={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <MoonIcon /> : <SunIcon />}
      </Button>
    </>
  );
};

export default DarkMode;

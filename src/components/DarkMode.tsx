import { darkAtom } from "@/utils/atoms/darkAtoms";
import { Button } from "@nextui-org/button";
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
      <Button
        variant="light"
        size="sm"
        onPress={() => setDarkMode(!darkMode)}>
        {darkMode ? <MoonIcon /> : <SunIcon />}
      </Button>
    </>
  );
};

export default DarkMode;

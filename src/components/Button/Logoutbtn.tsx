import { logoutUser } from "@/utlis/apiQueries";
import { Button } from "@nextui-org/button";
import { LogOut } from "lucide-react";
import { useRouter } from "next/router";

const Logoutbtn = () => {
  const { push } = useRouter();

  const logOut = async () => {
    const isloggedOut = await logoutUser();

    if (isloggedOut) {
      push("/auth/signin");
    }
  };

  return (
    <>
      <div className="">
        <Button onPress={logOut} isIconOnly>
          <LogOut size={20} />
        </Button>
      </div>
    </>
  );
};

export default Logoutbtn;

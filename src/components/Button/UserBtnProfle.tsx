import { Image } from "@nextui-org/image";
import Link from "next/link";

const UserBtnProfle = () => {
  return (
    <>
      <div className="flex items-center">
        <div className="text-pretty font-medium">Ranjana Kundu</div>
        <Link href={"/profile/edit"}>
          <Image
            className="cursor-pointer"
            radius="full"
            src={"/girl.png"}
            width={35}
            height={35}
            alt="Profile image"
          />
        </Link>
      </div>
    </>
  );
};

export default UserBtnProfle;

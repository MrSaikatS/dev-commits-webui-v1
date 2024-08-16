import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import Link from "next/link";
import ProfilePicUpdate from "./Button/ProfilePicUpdate";

const UserNav = () => {
  return (
    <>
      <div className="grid place-content-center mt-3">
        <Card className="w-[380px] sm:w-[500px]">
          <CardBody className="flex flex-col justify-center items-center space-y-1">
            <Image
              src={"/girl.png"}
              width={150}
              height={50}
              alt="Profile image"
            />
            <div className="flex flex-col items-center">
              <div className="font-semibold">
                First Name : <span>Ranjana</span>
              </div>
              <div className="font-semibold">Last Name : Kundu</div>
              <div className="font-semibold">Email : ranjankundu@gmail.com</div>
              <div className="font-semibold text-center">
                Description : Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ullam fugit impedit maiores similique reiciendis beatae,
              </div>
            </div>

            <div className="space-x-4 flex justify-center items-center">
              <ProfilePicUpdate />
              <ProfilePicUpdate />
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default UserNav;

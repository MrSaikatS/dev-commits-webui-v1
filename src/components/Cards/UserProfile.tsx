import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

import DeleteBtn from "../Button/DeleteBtn";
import { Image } from "@nextui-org/image";

const UserProfile = () => {
  return (
    <div>
      <Card className="w-[350px]">
        <CardHeader className="flex flex-row gap-2">
          <Image
            radius="full"
            src={"/girl.png"}
            width={60}
            height={60}
            alt="Profile image"
          />
          <div className="flex flex-col justify-center items-start">
            <div className="font-bold text-sm"></div>
            <div className="font-light"></div>
          </div>
        </CardHeader>
        <CardBody className="flex items-center">
          <Image
            className="rounded-3xl aspect-square"
            src={"/girl.png"}
            width={300}
            height={200}
            alt="Profile image"
          />
          <div className="text-center mt-3">
            <span className="font-extralight">{}</span>
          </div>
        </CardBody>
        <CardFooter className="flex items-center justify-center">
          <DeleteBtn />
        </CardFooter>
      </Card>
    </div>
  );
};

export default UserProfile;

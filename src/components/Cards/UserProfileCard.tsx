import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import DeleteBtn from "../Button/DeleteBtn";

const UserProfileCard = () => {
  return (
    <>
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
            <div className="font-bold text-sm">Ranjana Kundu</div>
            <div className="font-light">08.12.2024</div>
          </div>
        </CardHeader>
        <CardBody className="flex items-center">
          <Image
            className="rounded-3xl aspect-square"
            src={"/backgroundimage.JPG"}
            width={300}
            height={200}
            alt="Profile image"
          />
          <div className="text-center mt-3">
            <span className="font-extralight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            </span>
          </div>
        </CardBody>
        <CardFooter className="flex items-center justify-center">
          <DeleteBtn />
        </CardFooter>
      </Card>
    </>
  );
};

export default UserProfileCard;

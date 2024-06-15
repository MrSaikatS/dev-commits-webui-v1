import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

const ProfileCard = () => {
  return (
    <>
      <Card className="w-[320px]">
        <CardHeader className="items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={"/MYSELF2.jpg"}
              width={60}
              height={60}
              radius="full"
              alt="profile_img"
              className="aspect-square p-1"
            />
            <p className="">Priyangsu Banik</p>
          </div>

          <div className="">
            <Button
              // onPress={onOpen}
              variant="light"
              color="danger">
              Delete Post
            </Button>
          </div>
        </CardHeader>
        <CardBody>
          <div className="flex flex-col gap-4">
            <p className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
              aliquam eum quia aspernatur reprehenderit provident rem non sunt
              expedita ducimus.
            </p>
            <Image
              src={"/mercedes.jpg"}
              width={300}
              height={300}
              alt="post_img"
              className="aspect-video w-full rounded-md"
            />
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default ProfileCard;

import LikeButton from "@/components/Buttons/LikeButton";

import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

const AllPostCard = () => {
  return (
    <>
      <Card className="w-[320px] border-b-5">
        <CardBody className="">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Image
                src={
                  "https://cdn.pixabay.com/photo/2023/03/11/22/11/ai-generated-7845402_1280.jpg"
                }
                width={50}
                height={50}
                radius="full"
                alt="profile_img"
                className="aspect-square p-1"
              />
              <div className="font-bold">Priyangsu Banik</div>
            </div>
            <div className="flex flex-row items-center gap-2">
              +1
              <LikeButton />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-center text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
              aliquam eum quia aspernatur reprehenderit provident rem non sunt
              expedita ducimus.
            </div>

            <Image
              src={
                "https://cdn.pixabay.com/photo/2024/04/22/17/03/ai-generated-8713076_1280.png"
              }
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

export default AllPostCard;

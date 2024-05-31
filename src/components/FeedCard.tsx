import { Avatar } from "@nextui-org/avatar";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Heart, MessageCircleMore, Share2 } from "lucide-react";

const FeedCard = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <Card className="max-w-[300px]">
          <CardBody className="flex flex-col gap-3">
            <div className="flex gap-3 items-center">
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              <div className="font-bold">Ranjana Kumari</div>
            </div>
            <div className="">
              <Image
                radius="sm"
                width={300}
                alt="NextUI hero Image"
                src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
              />
            </div>

            <div className="flex gap-2">
              <Heart /> <MessageCircleMore />
              <Share2 />
            </div>

            <div className="">
              <div className="text-sm">
                Liked by <span className="font-semibold">rose</span>
              </div>
              <div className="space-x-2">
                <span className="font-semibold text-sm">Ranjana</span>
                <span className="text-wrap text-sm text-gray-800">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Atque ratione soluta cumque sequi, magnam tempora
                </span>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default FeedCard;

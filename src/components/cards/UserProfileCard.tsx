import { Post } from "@/utlis/types";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import LikeButton from "../button/LikeButton";
import DeletePost from "../button/DeletePost";

const UserProfileCard = ({ detail }: { detail: Post }) => {
  return (
    <>
      <div>
        <div className="mt-2">
          <Card className="sm:w-[400px] w-[350px]">
            <CardHeader className="items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src={
                    detail.user_created?.avatar === null
                      ? "/MYSELF2.jpg"
                      : `${process.env.NEXT_PUBLIC_API_URL}/assets/${detail.user_created?.avatar}`
                  }
                  height={60}
                  width={60}
                  radius="full"
                  className="aspect-square p-1"
                  isBlurred
                />
                <div className="text-lg">
                  {detail.user_created?.first_name}{" "}
                  {detail.user_created?.last_name}
                </div>
              </div>

              <LikeButton />
            </CardHeader>

            <CardBody className="space-y-6">
              <div className="grid place-items-center">
                <Image
                  src={`http://localhost:8055/assets/${detail.img}`}
                  height={300}
                  width={300}
                  className="aspect-video"
                  isBlurred
                />
              </div>

              <div className="text-justify">{detail.caption}</div>

              <DeletePost detail={detail} />
              {/* <Button color="secondary">Delete</Button> */}
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
};

export default UserProfileCard;

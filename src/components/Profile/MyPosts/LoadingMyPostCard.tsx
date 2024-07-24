import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Skeleton } from "@nextui-org/skeleton";

const LoadingMyPostCard = () => {
  return (
    <>
      <Card className="w-[320px]">
        <CardBody className="">
          <div className="flex justify-between">
            <div className="flex items-center gap-4">
              <Skeleton className="rounded-full">
                <Image
                  src={"https://i.pravatar.cc/150?u=a04258114e29026708c"}
                  width={50}
                  height={50}
                  radius="full"
                  alt="profile_img"
                  className="aspect-square p-1"
                />
              </Skeleton>
              <div className="">
                <Skeleton className="rounded-lg">Ranjana Kumari</Skeleton>
              </div>
            </div>

            <Skeleton className="rounded-md">
              <div className="">abcde</div>
            </Skeleton>
          </div>

          <div className="mt-2 flex flex-col gap-5">
            <div className="text-sm">
              <Skeleton className="rounded-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Numquam aliquam eum quia aspernatur reprehenderit provident rem
                non sunt expedita ducimus.
              </Skeleton>
            </div>
            <Skeleton className="rounded-lg">
              <Image
                src={"https://i.pravatar.cc/150?u=a04258114e29026708c"}
                width={300}
                height={300}
                alt="post_img"
                className="aspect-video w-full rounded-md"
              />
            </Skeleton>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default LoadingMyPostCard;

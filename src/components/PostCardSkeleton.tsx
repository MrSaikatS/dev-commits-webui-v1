import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Skeleton } from "@nextui-org/skeleton";

const PostCardSkeleton = () => {
  return (
    <>
      <Card className="w-[320px]">
        <CardHeader className="items-center justify-between">
          <div className="flex items-center gap-2">
            <Skeleton className="rounded-lg">
              <Image
                src={"/MYSELF2.jpg"}
                width={60}
                height={60}
                radius="full"
                alt="profile_img"
                className="aspect-square p-1"
              />
            </Skeleton>

            <span className="">
              <Skeleton className="rounded-lg">Priyangsu Banik</Skeleton>
            </span>
          </div>
        </CardHeader>

        <CardBody>
          <div className="flex flex-col gap-4">
            <span className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
              aliquam eum quia aspernatur reprehenderit provident rem non sunt
              expedita ducimus.
            </span>

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

export default PostCardSkeleton;

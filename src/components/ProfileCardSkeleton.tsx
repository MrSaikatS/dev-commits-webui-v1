import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Skeleton } from "@nextui-org/skeleton";

const ProfileCardSkeleton = () => {
  return (
    <>
      <Card className="h-full w-[320px]">
        <CardHeader className="items-center justify-between">
          <div className="flex items-center justify-between gap-2">
            <Skeleton className="rounded-full">
              <Image
                src={"/MYSELF2.jpg"}
                width={60}
                height={60}
                radius="full"
                // loading="lazy"
                alt="profile_img"
                className="aspect-square p-1"
              />
            </Skeleton>

            {/* <span className="flex items-start"> */}
            <Skeleton className="h-8 w-24 rounded-lg"></Skeleton>
            {/* </span> */}
          </div>

          {/* <div className="flex w-full items-end justify-end gap-2"> */}
          <Button
            isLoading
            // onPress={onOpen}
            variant="light"
            color="danger">
            Delete Post
          </Button>
          {/* </div> */}
        </CardHeader>

        <CardBody>
          <div className="flex flex-col gap-4">
            <span className="text-sm">
              <Skeleton className="rounded-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Numquam aliquam eum quia aspernatur reprehenderit provident rem
                non sunt expedita ducimus.
              </Skeleton>
            </span>
            <Skeleton className="rounded-lg">
              <Image
                src={"/mercedes.jpg"}
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

export default ProfileCardSkeleton;

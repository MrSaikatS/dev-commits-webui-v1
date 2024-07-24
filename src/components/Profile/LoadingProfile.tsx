import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Skeleton } from "@nextui-org/skeleton";

const LoadingProfile = () => {
  return (
    <>
      <Card>
        <CardBody>
          <div className="grid min-w-[320px] grid-flow-row place-items-center gap-2 p-4 sm:max-w-screen-sm sm:grid-flow-col">
            <div className="sm:ml-36">
              <Skeleton className="rounded-full">
                <Image
                  src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                  alt=""
                  radius="full"
                />
              </Skeleton>
            </div>
            <div className="w-full space-y-2 px-2 text-center sm:text-start">
              <div className="text-xl font-bold">
                <Skeleton className="rounded-lg">jane joe</Skeleton>
              </div>
              <div className="">
                <Skeleton className="rounded-lg">title</Skeleton>
              </div>
              <div className="text-lg">
                <Skeleton className="rounded-lg">
                  i am a full-stack developer
                </Skeleton>
              </div>
              <div className="grid grid-flow-row place-content-center gap-3 sm:place-content-start">
                <Skeleton className="w-52 rounded-lg py-2 sm:w-28">
                  <div className="">abcdefgh</div>
                </Skeleton>
                <Skeleton className="w-52 rounded-lg py-2 sm:w-28">
                  <div className="">abcdefgh</div>
                </Skeleton>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default LoadingProfile;

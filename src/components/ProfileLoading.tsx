import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Skeleton } from "@nextui-org/skeleton";

const ProfileLoading = () => {
  return (
    <>
      <Card
        isBlurred
        shadow="sm"
        className="border-none">
        <CardBody className="mb-2 mt-2 flex items-center justify-center gap-4">
          <Skeleton className="rounded-full">
            <Image
              src="/MYSELF2.jpg"
              className="h-32 w-32"
            />
          </Skeleton>

          <span className="text-2xl font-bold text-slate-950">
            <Skeleton className="rounded-lg">Priyangsu Banik</Skeleton>
          </span>
          <span className="">
            <Skeleton className="rounded-lg">
              priyangsubanik2003@gmail.com
            </Skeleton>
          </span>

          <span className="font-bold text-slate-950">
            <Skeleton className="rounded-lg">About</Skeleton>
          </span>
          <span className="text-center text-slate-950">
            <Skeleton className="rounded-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              libero sed. Odit doloremque fugiat repellat. Lorem ipsum, dolor
              sit amet consectetur adipisicin Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Beatae, libero sed. Odit doloremque
              fugiat repellat. Lorem ipsum, dolor sit amet consectetur
              adipisicin
            </Skeleton>
          </span>
        </CardBody>
      </Card>
    </>
  );
};

export default ProfileLoading;

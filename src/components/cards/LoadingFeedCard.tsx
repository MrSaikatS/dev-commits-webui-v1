import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";

const LoadingFeedCard = () => {
  return (
    <div>
      <Card className="w-[350px]">
        <CardHeader className="items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="grid place-items-center">
              {/* <Skeleton className="h-14 w-14 rounded-full"></Skeleton> */}
            </div>

            <div className="text-lg">
              {/* <Skeleton className="rounded-lg py-1">User FullName</Skeleton> */}
            </div>
          </div>

          <Button size="lg" variant="ghost" isLoading />
        </CardHeader>

        <CardBody className="space-y-6">
          <div className="grid place-items-center">
            {/* <Skeleton className="h-[300px] w-[300px] rounded-lg"></Skeleton> */}
          </div>

          <div className="text-justify">
            <div className="flex flex-col items-start gap-1">
              {/* <Skeleton className="w-full rounded-lg">
                  Lorem, ipsum dolor sit amet consectetur
                </Skeleton> */}
              {/* <Skeleton className="w-full rounded-lg">
                  adipisicing elit. Nisi quas reiciendis sed
                </Skeleton>
                <Skeleton className="rounded-lg">eligendi magni aut?</Skeleton> */}
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default LoadingFeedCard;

import { Card, CardBody } from "@nextui-org/card";
import ProfilePicUpdate from "./Button/ProfilePicUpdate";
import { Skeleton } from "@nextui-org/skeleton";

const UserNavSkele = () => {
  return (
    <>
      <div className="grid place-content-center mt-3">
        <Card className="w-[380px] sm:w-[500px]">
          <CardBody className="flex flex-col justify-center items-center space-y-1">
            <Skeleton className="rounded-2xl">
              <div className="w-40 h-40 rounded-full"></div>
            </Skeleton>

            <div className="flex flex-col items-center gap-3">
              <div className="font-semibold">
                <Skeleton className="rounded-2xl">
                  {" "}
                  First Name : <span>Ranjana</span>
                </Skeleton>
              </div>
              <div className="font-semibold">
                <Skeleton className="rounded-2xl">Last Name : Kundu</Skeleton>
              </div>
              <div className="font-semibold">
                <Skeleton className="rounded-2xl">
                  Email : ranjankundu@gmail.com
                </Skeleton>
              </div>
              <div className="font-semibold text-center">
                <Skeleton className="rounded-2xl">
                  Description : Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Ullam fugit impedit maiores similique
                  reiciendis beatae,
                </Skeleton>
              </div>
            </div>

            <div className="space-x-4 flex justify-center items-center">
              <Skeleton className="rounded-2xl">
                {" "}
                <div className="w-12 h-2"></div>
              </Skeleton>
              <Skeleton className="rounded-2xl">
                <div className="w-12 h-2"></div>
              </Skeleton>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default UserNavSkele;

import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import ProfilePicture from "../Modals/ProfilePicture";
import { useRouter } from "next/router";

const Profile = () => {
  const router = useRouter();
  return (
    <>
      <Card>
        <CardBody>
          <div className="grid min-w-[320px] grid-flow-row place-items-center gap-2 p-4 sm:max-w-screen-sm sm:grid-flow-col">
            <div className="sm:ml-36">
              <Image
                src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                alt=""
                radius="full"
              />
            </div>
            <div className="w-full space-y-2 px-2 text-center sm:text-start">
              <div className="text-xl font-bold">Ranjana Kundu</div>
              <div className="">title</div>
              <div className="text-lg">I am a full-stack developer</div>
              <div className="grid grid-flow-col gap-5">
                <ProfilePicture />
              </div>
              <Button
                className="w-52 sm:w-28"
                color="secondary"
                variant="ghost"
                onClick={() =>
                  router.push(
                    `/app/edit/${"b93c58e7-d4ac-4c36-b36b-d4bcc3f62bd3"}`,
                  )
                }>
                Edit About
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default Profile;

import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import EditProfileModal from "../Modals/EditProfileModal";

const Profile = () => {
  return (
    <>
      <Card>
        <CardBody>
          <div className="grid min-w-[320px] grid-flow-row place-items-center gap-2 p-4 sm:max-w-screen-sm sm:grid-flow-col">
            <div className="">
              <Image
                src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                alt=""
                radius="full"
              />
            </div>
            <div className="w-full space-y-4 px-2 text-center sm:text-start">
              <div className="text-xl font-bold">jane joe</div>
              <div className="">title</div>
              <div className="text-lg">i am a full-stack developer</div>
              <div className="grid grid-flow-col gap-5">
                <EditProfileModal />
                <Button
                  color="secondary"
                  variant="ghost">
                  Edit About
                </Button>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default Profile;

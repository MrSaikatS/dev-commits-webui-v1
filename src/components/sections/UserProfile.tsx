import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import UpdateProfilePic from "../modals/UpdateProfilePic";
import UpdateProfile from "../modals/UpdateProfile";

const UserProfile = () => {
  return (
    <div>
      <div className="container mx-auto grid max-w-screen-xl place-items-center p-6">
        <Card>
          <CardBody>
            <div className="grid min-w-[330px] max-w-[330px] grid-flow-row place-items-center gap-8 p-2 sm:max-w-screen-sm sm:grid-flow-col">
              <div className="">
                <Image
                  isBlurred
                  width={200}
                  src="/MYSELF2.jpg"
                  radius="full"
                  //   loading="lazy"
                  className="aspect-square p-1"
                />
              </div>

              <div className="w-full flex-col gap-2 text-center sm:flex sm:text-start">
                <div className="text-4xl font-semibold">dgdgdgdgdgd</div>
                <div className="mt-1 text-xl">dgdgdgdgdg</div>
                <div className="max-w-[322px]">gdgdgdgd</div>

                <div className="my-2 grid grid-flow-col gap-4">
                  <UpdateProfilePic />
                  <UpdateProfile />
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default UserProfile;

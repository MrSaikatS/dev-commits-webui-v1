import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import UpdateProfilePic from "../modals/UpdateProfilePic";
import UpdateProfile from "../modals/UpdateProfile";
import { getAuthUser } from "@/utlis/tanstackqueries";

const UserProfile = () => {
  const { data, isFetched, isSuccess } = getAuthUser();

  if (isFetched && isSuccess) {
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
                    src={
                      data.avatar === null
                        ? `/MYSELF2.jpg`
                        : `http://localhost:8055/assets/${data.avatar}`
                    }
                    radius="full"
                    alt={data.first_name ? data.first_name : "User Name"}
                    loading="lazy"
                    className="aspect-square p-1"
                  />
                </div>

                <div className="w-full flex-col gap-2 text-center sm:flex sm:text-start">
                  <div className="text-4xl font-semibold">
                    {data.first_name} {data.last_name}
                  </div>
                  <div className="mt-1 text-xl">
                    ( {data.title ? data.title : "Nick Name"} )
                  </div>
                  <div className="max-w-[322px]">{data.description}</div>

                  <div className="my-2 grid grid-flow-col gap-4">
                    <UpdateProfilePic info={data} />
                    <UpdateProfile info={data} />
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
};

export default UserProfile;

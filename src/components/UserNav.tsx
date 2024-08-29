import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import ProfilePicUpdate from "./Button/ProfilePicUpdate";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "@/utlis/apiQueries";
import { UserType } from "@/utlis/types/UserType";
import UserNavSkele from "./UserNavSkele";
import ProfilleDetailsUpdate from "./Button/ProfilleDetailsUpdate";

const UserNav = () => {
  const { data, isLoading, isFetching, isSuccess, isFetched } = useQuery({
    queryKey: ["getMe"],
    queryFn: async () => {
      const res = await getCurrentUser();
      return res?.json<UserType>();
    },
    refetchOnWindowFocus: false,
  });

  if (isLoading || isFetching) {
    return (
      <>
        <UserNavSkele />
      </>
    );
  }

  if (isFetched && isSuccess) {
    return (
      <>
        <div className="grid place-content-center mt-3">
          <Card className="w-[380px] sm:w-[500px]">
            <CardBody className="flex flex-col justify-center items-center space-y-1">
              <Image
                src={`${process.env.NEXT_PUBLIC_API}/assets/${data?.data.avatar} || "/girl.png"`}
                className="cursor-pointer object-cover w-40 h-40 "
                radius="full"
                alt="Profile image"
              />
              <div className="flex flex-col items-center">
                <div className="font-semibold">
                  First Name : <span>{data?.data.first_name}</span>
                </div>
                <div className="font-semibold">
                  Last Name :{data?.data.last_name}{" "}
                </div>
                <div className="font-semibold">Email : {data?.data.email}</div>
                <div className="font-semibold text-center">
                  {data?.data.description || "No Bio"}
                </div>
              </div>

              <div className="space-x-4 flex justify-center items-center">
                <ProfilePicUpdate id={data?.data.avatar} />
                <ProfilleDetailsUpdate />
              </div>
            </CardBody>
          </Card>
        </div>
      </>
    );
  }
};

export default UserNav;

import { getCurrentUser } from "@/utlis/apiQueries";
import { UserType } from "@/utlis/types/UserType";
import { Image } from "@nextui-org/image";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

const UserBtnProfle = () => {
  const { data } = useQuery({
    queryKey: ["getMe"],
    queryFn: async () => {
      const res = await getCurrentUser();
      return res?.json<UserType>();
    },
  });

  console.log(data);

  console.log(`${process.env.NEXT_PUBLIC_API}/assets/${data?.data.avatar}`);

  return (
    <>
      <div className="flex items-center gap-2">
        <div className="text-pretty font-medium">{data?.data.first_name}</div>
        <Link href={"/profile/edit"} className="rounded-full">
          <div className="">
            <Image
              className="cursor-pointer object-cover w-12 h-12 "
              radius="full"
              src={`${process.env.NEXT_PUBLIC_API}/assets/${data?.data.avatar} || "/girl.png"`}
              alt="Profile image"
            />
          </div>
        </Link>
      </div>
    </>
  );
};

export default UserBtnProfle;

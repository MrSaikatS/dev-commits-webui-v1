import { publicUserPosts } from "@/utlis/apiQueries";
import { UserType } from "@/utlis/types/UserType";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { useQuery } from "@tanstack/react-query";

const PublicUserPostCard = ({ detail }: { detail: UserType }) => {
  const { data, isLoading, isFetched, isSuccess } = useQuery({
    queryKey: ["publicPosts"],
    queryFn: async () => {
      const res = await publicUserPosts(detail.data.id);

      return res;
    },
  });

  console.log(data);

  return (
    <>
      {data?.data.map((items) => {
        const options: Intl.DateTimeFormatOptions = {
          day: "numeric",
          month: "long",
          year: "numeric",
          timeZone: "UTC",
        };

        const date = new Date(items.date_created);
        const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
          date
        );

        const posting_date = formattedDate.replace(/\s(?=[AP]M)/, " ");

        return (
          <Card className="w-[350px]" key={items.id}>
            <CardHeader className="flex flex-row gap-2">
              {items.user_created.avatar !== null ? (
                <Image
                  className="w-12 h-12 rounded-full"
                  src={`${process.env.NEXT_PUBLIC_API}/assets/${items?.user_created.avatar}`}
                  alt="Profile image"
                />
              ) : (
                <Image
                  src={
                    "https://citindia.in/wp-content/uploads/2022/03/Saikat.png.webp"
                  }
                  className="cursor-pointer object-cover w-12 h-12 "
                  radius="full"
                  alt="Profile image"
                />
              )}

              <div className="flex flex-col justify-center items-start">
                <div className="font-bold text-sm">
                  {items.user_created.first_name}
                </div>
                <div className="font-light">{posting_date}</div>
              </div>
            </CardHeader>
            <CardBody className="flex items-center">
              <Image
                className="rounded-3xl aspect-square"
                src={`${process.env.NEXT_PUBLIC_API}/assets/${items?.post_img.id}`}
                width={300}
                height={200}
                alt="Profile image"
              />
              <div className="text-center mt-3">
                <span className="font-extralight">{items.caption}</span>
              </div>
            </CardBody>
          </Card>
        );
      })}
    </>
  );
};

export default PublicUserPostCard;

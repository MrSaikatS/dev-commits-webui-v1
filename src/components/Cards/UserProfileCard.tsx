import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import DeleteBtn from "../Button/DeleteBtn";
import { PostTypeSingle } from "@/utlis/types/PostType";
import { env } from "@/utlis/env";
const UserProfileCard = ({ info }: { info: PostTypeSingle }) => {
  console.log(`${env.NEXT_PUBLIC_API}/assets/${info.post_img}`);

  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  };

  const date = new Date(info.date_created);
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

  const posting_date = formattedDate.replace(/\s(?=[AP]M)/, " ");

  return (
    <>
      <Card className="w-[350px]">
        <CardHeader className="flex justify-between">
          <div className="ml-3 flex flex-row gap-2">
            {info.user_created.avatar !== null ? (
              <Image
                className="w-12 h-12 rounded-full"
                src={`${env.NEXT_PUBLIC_API}/assets/${info.user_created.avatar}`}
                alt="Profile image"
              />
            ) : (
              <Image
                className="w-12 h-12 rounded-full"
                src={
                  "https://citindia.in/wp-content/uploads/2022/03/Saikat.png.webp"
                }
                alt="Profile image"
              />
            )}

            <div className="flex flex-col justify-center items-start">
              <div className="font-bold text-sm">
                {info.user_created.first_name} {info.user_created.last_name}
              </div>
              <div className="font-light">{posting_date}</div>
            </div>
          </div>
          <div className="mr-3">
            <DeleteBtn id={info.id} />
          </div>
        </CardHeader>
        <CardBody className="flex items-center">
          <Image
            className="rounded-3xl aspect-square"
            src={`${env.NEXT_PUBLIC_API}/assets/${info.post_img.id} || "/girl.png"`}
            width={300}
            height={200}
            alt="Profile image"
          />
          <div className="mt-3">
            <span className="">{info.caption}</span>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default UserProfileCard;

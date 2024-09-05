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
        <CardHeader className="flex flex-row gap-2">
          <Image
            radius="full"
            src={`${env.NEXT_PUBLIC_API}/assets/${info.user_created.avatar} || "/girl.png"`}
            width={60}
            height={60}
            alt="Profile image"
          />
          <div className="flex flex-col justify-center items-start">
            <div className="font-bold text-sm">
              {info.user_created.first_name} {info.user_created.last_name}
            </div>
            <div className="font-light">{posting_date}</div>
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
          <div className="text-center mt-3">
            <span className="font-extralight">{info.caption}</span>
          </div>
        </CardBody>
        <CardFooter className="flex items-center justify-center">
          <DeleteBtn id={info.id} />
        </CardFooter>
      </Card>
    </>
  );
};

export default UserProfileCard;

import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import LikeButton from "../Button/LikeButton";
import { PostTypeSingle } from "@/utlis/types/PostType";
import Link from "next/link";

const UserFeedCard = ({ info }: { info: PostTypeSingle }) => {
  console.log(info);

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
          <div>
            <Link
              href={`profile/${info.user_created.id}`}
              className="flex  justify-center items-center gap-2"
            >
              {info.user_created.avatar !== null ? (
                <Image
                  src={`${process.env.NEXT_PUBLIC_API}/assets/${info?.user_created.avatar}`}
                  className="cursor-pointer object-cover w-12 h-12 "
                  radius="full"
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

              <div className="flex flex-col ">
                <div className="font-bold text-sm">
                  {info.user_created.first_name} {info.user_created.last_name}
                </div>
                <div className="font-light">{posting_date}</div>
              </div>
            </Link>
          </div>
        </CardHeader>
        <CardBody className="flex items-center">
          <Image
            className="rounded-3xl aspect-square"
            src={`${process.env.NEXT_PUBLIC_API}/assets/${info?.post_img.id}`}
            width={300}
            height={200}
            alt="Profile image"
          />
          <div className="text-center mt-3">
            <span className="font-extralight">{info.caption}</span>
          </div>
        </CardBody>
        <CardFooter className="">
          <LikeButton postid={info.id} />
          {info.likes.length}
        </CardFooter>
      </Card>
    </>
  );
};

export default UserFeedCard;

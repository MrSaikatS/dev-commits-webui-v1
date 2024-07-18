import { sdk } from "@/utils/sdk";
import { Post } from "@/utils/types";
import { readItems, readMe } from "@directus/sdk";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { useQuery } from "@tanstack/react-query";
import LikeBtn from "./buttons/LikeBtn";

const PostCard = ({ info }: { info: Post }) => {
  const { data, isFetched, isSuccess } = useQuery({
    queryKey: ["likeStatus", info.id],
    queryFn: async () => {
      const { id } = await sdk.request(readMe());

      const likeData = await sdk.request(
        readItems("post_likes", {
          filter: {
            post_id: {
              _eq: info.id,
            },
            user_created: {
              _eq: id,
            },
          },
        }),
      );

      console.log(likeData);

      return likeData;
    },
  });

  if (isFetched && isSuccess) {
    return (
      <>
        <div className="">
          <Card className="w-[320px]">
            <CardHeader className="items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src={
                    info.user_created?.avatar === null
                      ? "/favicon.ico"
                      : `http://localhost:8055/assets/${info.user_created?.avatar}`
                  }
                  width={60}
                  height={60}
                  radius="full"
                  alt="profile_img"
                  className="aspect-square p-1"
                />
                <p className="">{info.user_created?.first_name}</p>
              </div>

              <div className="">
                <LikeBtn
                  info={info}
                  data={data}
                />
                {/* <DeletePostModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
              /> */}
              </div>
            </CardHeader>
            <CardBody>
              <div className="flex flex-col gap-4">
                <p className="text-sm">{info.caption}</p>
                <Image
                  src={`http://localhost:8055/assets/${info.img}`}
                  width={300}
                  height={300}
                  alt="post_img"
                  className="aspect-video w-full rounded-md"
                />
              </div>
            </CardBody>
          </Card>
        </div>
      </>
    );
  }
};

export default PostCard;

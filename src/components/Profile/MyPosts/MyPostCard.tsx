import DeletePostModal from "@/components/Modals/DeletePostModal";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

const MyPostCard = () => {
  return (
    <>
      <Card className="w-[320px] border-b-5">
        <CardBody className="">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Image
                src={
                  "https://cdn.pixabay.com/photo/2023/09/17/17/33/ai-generated-8259052_1280.jpg"
                }
                width={50}
                height={50}
                radius="full"
                alt="profile_img"
                className="aspect-square p-1"
              />
              <div className="font-bold">Priyangsu Banik</div>
            </div>
            <DeletePostModal />
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-center text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
              aliquam eum quia aspernatur reprehenderit provident rem non sunt
              expedita ducimus.
            </div>

            <Image
              src={
                "https://cdn.pixabay.com/photo/2023/09/25/03/27/ai-generated-8274116_960_720.png"
              }
              width={300}
              height={300}
              alt="post_img"
              className="aspect-video w-full rounded-md"
            />
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default MyPostCard;

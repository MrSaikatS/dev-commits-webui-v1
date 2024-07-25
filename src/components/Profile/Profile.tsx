import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import ProfilePicture from "../Modals/ProfilePicture";
import { useRouter } from "next/router";
import { useFilePicker } from "use-file-picker";
import { useState } from "react";
import { Camera } from "lucide-react";

const Profile = () => {
  const router = useRouter();

  const [selectedImage, setSelectedImage] = useState(false);

  const { openFilePicker, filesContent } = useFilePicker({
    multiple: false,
    accept: "image/*",
    readAs: "DataURL",
    onFilesSuccessfullySelected: () => {
      setSelectedImage(true);
    },
    onClear: () => {
      setSelectedImage(false);
    },
  });

  // const clearImg = () => {
  //   clear();
  // };

  // const profilePhotoFn = async () => {};

  return (
    <>
      <Card>
        <CardBody>
          <div className="grid min-w-[320px] grid-flow-row place-items-center gap-2 p-4 sm:max-w-screen-sm sm:grid-flow-col">
            <div className="relative sm:ml-36">
              {filesContent.map((file, index) => (
                <Image
                  src={file.content}
                  key={index}
                  className="aspect-square h-40 w-40 rounded-full border-zinc-950"
                />
              ))}
              {!selectedImage && (
                <Image
                  className="aspect-square h-40 w-40 rounded-full"
                  src="/blank.jpg"
                />
              )}
              <Camera
                color="Black"
                size={30}
                onClick={openFilePicker}
                className="absolute left-28 top-28 z-10 rounded-full bg-purple-400 p-1"
              />
            </div>
            <div className="w-full space-y-2 px-2 text-center sm:text-start">
              <div className="text-xl font-bold">Ranjana Kundu</div>
              <div className="">title</div>
              <div className="text-lg">I am a full-stack developer</div>
              <div className="grid grid-flow-col gap-5"></div>
              <ProfilePicture />
              <Button
                className="w-52 sm:w-28"
                color="secondary"
                variant="ghost"
                onClick={() =>
                  router.push(
                    `/app/edit/${"b93c58e7-d4ac-4c36-b36b-d4bcc3f62bd3"}`,
                  )
                }>
                Edit About
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default Profile;

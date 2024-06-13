import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";

import { Avatar } from "@nextui-org/avatar";
import { useForm } from "react-hook-form";
import { profileEditSchemaType } from "@/utils/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileEditSchema } from "@/utils/zodSchemas";
import { Rss } from "lucide-react";
import { useFilePicker } from "use-file-picker";
import { useState } from "react";
import { toast } from "sonner";

const ProfileEdit = () => {
  //  ProfileScehma Validation Code

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<profileEditSchemaType>({
    resolver: zodResolver(profileEditSchema),
  });

  // file picker code
  const [selectedImage, setSelectedImage] = useState(false);
  const { openFilePicker, filesContent, plainFiles } = useFilePicker({
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

  // main function connect to backend

  const updateProfileData = (updatedata: profileEditSchemaType) => {
    console.log(updatedata);
    toast("This is a sonner toast");
    console.log(plainFiles);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(updateProfileData)}
        className="flex h-[70dvh] items-center justify-center">
        <Card className="w-[500px]">
          <CardBody className="flex items-center space-y-8">
            <div className="relative flex h-[150px] w-[150px] items-center justify-center rounded-full bg-black">
              {filesContent.map((file, index) => (
                <Avatar
                  size="lg"
                  src={file.content}
                  key={index}
                  className="aspect-square h-32 w-32 rounded-full"
                  {...register("image")}
                />
              ))}
              {!selectedImage && (
                <Avatar
                  size="lg"
                  className="aspect-square h-32 w-32 rounded-full"
                  src="/blank.jpg"
                />
              )}

              <Rss
                color="black"
                size={30}
                onClick={openFilePicker}
                strokeWidth={3}
                className="absolute left-24 top-24 z-10 rounded-full bg-cyan-300 p-1"
              />
            </div>

            <Input
              label="Enter Your Profile Name"
              variant="bordered"
              color="primary"
              radius="md"
              {...register("profile_Name")}
              isInvalid={!!errors.profile_Name?.message}
              errorMessage={errors.profile_Name?.message}
            />
            <Input
              label="Enter Your Profile Email"
              variant="bordered"
              type="email"
              color="primary"
              radius="md"
              {...register("profile_email")}
              isInvalid={!!errors.profile_email?.message}
              errorMessage={errors.profile_email?.message}
            />
            <Input
              label="Enter Your Bio Or About"
              variant="bordered"
              color="primary"
              radius="md"
              {...register("bio")}
              isInvalid={!!errors.bio?.message}
              errorMessage={errors.bio?.message}
            />
            <Button
              type="submit"
              color="primary"
              variant="shadow"
              radius="md"
              fullWidth
              isLoading={isSubmitting}>
              Update Your Profile
            </Button>
          </CardBody>
        </Card>
      </form>
    </>
  );
};

export default ProfileEdit;

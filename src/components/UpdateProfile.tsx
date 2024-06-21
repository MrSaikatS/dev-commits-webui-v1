import { UpdateProfileSchemaType } from "@/utils/types";
import { updateProfileSchema } from "@/utils/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Rss, UserCheck } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useFilePicker } from "use-file-picker";
import { Tooltip } from "@nextui-org/tooltip";
import { toast } from "sonner";

const UpdateProfile = () => {
  // file picker code
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

  // form Validation Code

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<UpdateProfileSchemaType>({
    resolver: zodResolver(updateProfileSchema),
  });

  //   form data backend

  const updateProfileFunc = async (infodata: UpdateProfileSchemaType) => {
    await new Promise<void>((r) => setTimeout(r, 2000));
    console.log(infodata);
    toast.info("User Profile Edit Successfully.", {
      icon: (
        <UserCheck
          size={20}
          color="blue"
        />
      ),
    });
    console.log(infodata);
  };

  return (
    <>
      <div className="mb-4 text-center text-3xl font-bold">Profile Edit</div>
      <Card>
        <CardBody>
          <div className="flex h-[150px] w-full items-center justify-center rounded-full">
            <div className="grid w-[150px] place-items-center">
              <div className="relative">
                {filesContent.map((file, index) => (
                  <Image
                    src={file.content}
                    key={index}
                    className="aspect-square h-32 w-32 rounded-full"
                  />
                ))}
                {!selectedImage && (
                  <Image
                    className="aspect-square h-32 w-32 rounded-full"
                    src="/blank.jpg"
                  />
                )}
                <Tooltip
                  content="Upload Profile Image"
                  color="primary"
                  shadow="md"
                  radius="lg"
                  showArrow={true}>
                  <Rss
                    color="Black"
                    size={30}
                    onClick={openFilePicker}
                    className="absolute left-24 top-24 z-10 rounded-full bg-sky-400 p-1"
                  />
                </Tooltip>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(updateProfileFunc)}
            className="space-y-6">
            <Input
              label="Enter Your First Name"
              variant="bordered"
              color="primary"
              radius="md"
              {...register("first_name")}
              isInvalid={!!errors.first_name?.message}
              errorMessage={errors.first_name?.message}
            />
            <Input
              label="Enter Your Last Name"
              variant="bordered"
              color="primary"
              radius="md"
              {...register("last_name")}
              isInvalid={!!errors.last_name?.message}
              errorMessage={errors.last_name?.message}
            />
            <Input
              label="Enter Your Nick Name"
              variant="bordered"
              color="primary"
              radius="md"
              {...register("title")}
              isInvalid={!!errors.title?.message}
              errorMessage={errors.title?.message}
            />
            <Input
              label="Enter Your Email Id"
              variant="bordered"
              color="primary"
              radius="md"
              {...register("email")}
              isInvalid={!!errors.email?.message}
              errorMessage={errors.email?.message}
            />
            <Input
              label="Enter Your Description"
              variant="bordered"
              color="primary"
              radius="md"
              {...register("description")}
              isInvalid={!!errors.description?.message}
              errorMessage={errors.description?.message}
            />
            <Button
              type="submit"
              color="primary"
              variant="shadow"
              radius="md"
              fullWidth
              isLoading={isSubmitting}>
              Update Your Account Profile
            </Button>
          </form>
        </CardBody>
      </Card>
    </>
  );
};

export default UpdateProfile;

import { postSchemaType } from "@/utils/types";
import { postSchema } from "@/utils/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useFilePicker } from "use-file-picker";

const CreatePostForm = () => {
  const [selectedImage, setSelectedImage] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<postSchemaType>({
    resolver: zodResolver(postSchema),
  });

  const { openFilePicker, filesContent, plainFiles, clear } = useFilePicker({
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

  const clearImg = () => {
    clear();
    reset();
  };

  const postFn = (postData: postSchemaType) => {
    console.log(postData);
    console.log(plainFiles);
  };
  return (
    <>
      <div className="mx-auto flex w-[320px] items-center justify-center sm:w-full">
        <Card className="h-full w-full">
          <CardBody className="h-full">
            <div className="flex h-[290px] flex-col items-center">
              {filesContent.map((file, index) => (
                <img
                  src={file.content}
                  key={index}
                  alt={file.name}
                  width={290}
                  className="aspect-square"
                />
              ))}

              {!selectedImage && (
                <Button
                  color="primary"
                  onPress={openFilePicker}>
                  Select File
                </Button>
              )}
            </div>
            {selectedImage && (
              <form
                action=""
                className="flex flex-col space-y-5"
                onSubmit={handleSubmit(postFn)}>
                <Input
                  {...register("caption")}
                  placeholder="Write something about your post"
                  radius="sm"
                  color="primary"
                  variant="underlined"
                  errorMessage={errors.caption?.message}
                  isInvalid={!!errors.caption?.message}
                />
                <Button
                  radius="sm"
                  type="submit"
                  color="primary"
                  variant="shadow">
                  Create Post
                </Button>
                <Button
                  onPress={clearImg}
                  radius="sm"
                  type="submit"
                  color="danger"
                  variant="shadow">
                  Cancel
                </Button>
              </form>
            )}
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default CreatePostForm;

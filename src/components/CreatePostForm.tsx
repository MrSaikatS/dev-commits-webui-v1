import { postSchemaType } from "@/utils/types";
import { postSchema } from "@/utils/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";

import { sdk } from "@/utils/sdk";
import { createItem, uploadFiles } from "@directus/sdk";
import { Textarea } from "@nextui-org/input";
import { Tooltip } from "@nextui-org/tooltip";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useFilePicker } from "use-file-picker";

const CreatePostForm = () => {
  const [selectedImage, setSelectedImage] = useState(false);

  const queryClient = useQueryClient();

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

  const postFn = async (postData: postSchemaType) => {
    const formData = new FormData();
    formData.append("file", plainFiles[0]);

    const { id } = await sdk.request(uploadFiles(formData));

    await sdk.request(
      createItem("posts", {
        caption: postData.caption,
        img: id as any,
      }),
    );

    clearImg();

    queryClient.refetchQueries({ queryKey: ["posts"] });
  };
  return (
    <>
      {/* <div className="mx-auto flex w-[320px] items-center justify-center sm:w-full"> */}
      {/* <Card className="h-full w-full"> */}
      {/* <CardBody className="h-full"> */}
      <div className="flex flex-col items-center">
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
          <Tooltip
            content="Select The Image"
            shadow="md"
            radius="lg"
            showArrow={true}>
            <Button
              color="primary"
              onPress={openFilePicker}>
              Select File
            </Button>
          </Tooltip>
        )}
      </div>
      {selectedImage && (
        <form
          action=""
          className="grid grid-cols-2 place-items-center gap-4"
          onSubmit={handleSubmit(postFn)}>
          <Textarea
            {...register("caption")}
            placeholder="Write something about your post"
            radius="sm"
            color="primary"
            className="col-span-2"
            variant="underlined"
            errorMessage={errors.caption?.message}
            isInvalid={!!errors.caption?.message}
          />
          <Button
            onPress={clearImg}
            radius="sm"
            type="submit"
            color="danger"
            variant="shadow"
            fullWidth>
            Cancel
          </Button>
          <Button
            radius="sm"
            type="submit"
            color="primary"
            variant="shadow"
            fullWidth>
            Create Post
          </Button>
        </form>
      )}
      {/* </CardBody> */}
      {/* </Card> */}
      {/* </div */}
    </>
  );
};

export default CreatePostForm;

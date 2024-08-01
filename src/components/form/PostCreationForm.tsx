import { sdk } from "@/utlis/sdk";
import { postSchemaType } from "@/utlis/types";
import { createPostSchema } from "@/utlis/zodschema";
import { createItem, uploadFiles } from "@directus/sdk";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/input";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useFilePicker } from "use-file-picker";

const PostCreationForm = () => {
  const [selectedImage, setSelectedImage] = useState(false);

  const queryClient = useQueryClient();
  // Validation Form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<postSchemaType>({
    resolver: zodResolver(createPostSchema),
  });

  // File Picker
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

  // Main Backend Function

  const postFn = async (postData: postSchemaType) => {
    const formData = new FormData();
    formData.append("file", plainFiles[0]);

    const { id } = await sdk.request(uploadFiles(formData));

    await sdk.request(
      createItem("posts", {
        caption: postData.caption,
        img: id as any,
      })
    );

    clearImg();
    queryClient.refetchQueries();
  };

  return (
    <>
      <>
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
            <Button color="primary" onPress={openFilePicker}>
              Select File
            </Button>
          )}
        </div>
        {selectedImage && (
          <form
            action=""
            className="grid grid-cols-2 place-items-center gap-4"
            onSubmit={handleSubmit(postFn)}
          >
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
              fullWidth
            >
              Cancel
            </Button>
            <Button
              radius="sm"
              isLoading={isSubmitting}
              type="submit"
              color="primary"
              variant="shadow"
              fullWidth
            >
              Create Post
            </Button>
          </form>
        )}
        {/* </CardBody> */}
        {/* </Card> */}
        {/* </div */}
      </>
    </>
  );
};

export default PostCreationForm;

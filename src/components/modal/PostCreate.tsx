import { postSchema, PostSchemaType } from "@/utlis/zodschema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useFilePicker } from "use-file-picker";
import { Textarea } from "@nextui-org/input";
import { uploadPost } from "@/utlis/apiQueries";
import { useQueryClient } from "@tanstack/react-query";

const PostCreate = ({ onOpenChange }: { onOpenChange: () => void }) => {
  const queryClient = useQueryClient();

  const [selectedImage, setSelectedImage] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<PostSchemaType>({
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

  const postFn = async (postData: PostSchemaType) => {
    await uploadPost(postData, plainFiles);
    onOpenChange();

    queryClient.refetchQueries({ queryKey: ["allposts"] });
  };
  console.log();

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
            className="rounded-md object-contain"
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
            isLoading={isSubmitting}
            radius="sm"
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
  );
};

export default PostCreate;

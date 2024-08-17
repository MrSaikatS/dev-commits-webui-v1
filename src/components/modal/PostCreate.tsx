import { postSchema, PostSchemaType } from "@/utlis/zodschema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useFilePicker } from "use-file-picker";
import { Textarea } from "@nextui-org/input";

const PostCreate = () => {
  const [selectedImage, setSelectedImage] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PostSchemaType>({
    resolver: zodResolver(postSchema),
  });

  const { openFilePicker, filesContent, clear } = useFilePicker({
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

  const postFn = async (postData: PostSchemaType) => {};
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
            className="aspect-square rounded-md"
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

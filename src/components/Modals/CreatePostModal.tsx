import { postSchemaType } from "@/utlis/types";
import { postSchema } from "@/utlis/zodschema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useFilePicker } from "use-file-picker";

const CreatePostModal = () => {
  const [selectedImage, setSelectedImage] = useState(false);
  // Validation Code
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<postSchemaType>({
    resolver: zodResolver(postSchema),
  });

  // Filepicker Code
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

  const postDataFun = () => {
    console.log("Gdgdgd");
  };

  return (
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
          <Button
            color="secondary"
            onPress={openFilePicker}>
            Select File
          </Button>
        )}
      </div>
      {selectedImage && (
        <form
          action=""
          className="grid grid-cols-2 place-items-center gap-4"
          onSubmit={handleSubmit(postDataFun)}>
          <Textarea
            {...register("caption")}
            placeholder="Write something about your post"
            radius="sm"
            color="secondary"
            className="col-span-2"
            variant="underlined"
            errorMessage={errors.caption?.message}
            isInvalid={!errors.caption?.message}
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
            color="secondary"
            variant="shadow"
            fullWidth>
            Create Post
          </Button>
        </form>
      )}
    </>
  );
};

export default CreatePostModal;

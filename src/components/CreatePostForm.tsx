import { postSchemaType } from "@/utils/types";
import { postSchema } from "@/utils/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Image } from "lucide-react";

const CreatePostForm = () => {
  const { register, handleSubmit, setValue } = useForm<postSchemaType>({
    resolver: zodResolver(postSchema),
  });

  const [imagePrev, setImagePrev] = useState<string | null>(null);

  const postFn = (postData: postSchemaType) => {
    console.log(postData);
  };

  const selectImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePrev(reader.result as string);
      };
      reader.readAsDataURL(file);
      setValue("postImage", file);
    }
  };

  return (
    <>
      <div className="flex w-full items-center justify-center sm:h-2/3 sm:w-1/2">
        <Card className="h-full w-full">
          <CardBody className="h-full">
            <form
              action=""
              className="flex flex-col space-y-5"
              onSubmit={handleSubmit(postFn)}>
              <div className="flex h-[290px] flex-col items-center">
                {imagePrev ? (
                  <div className="h-[290px] p-1">
                    <img
                      src={imagePrev}
                      alt="Selected"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <label className="flex h-full w-full cursor-pointer items-center justify-center rounded border border-dashed border-gray-400 p-4 text-center">
                    <div className="flex h-full w-full items-center justify-center">
                      <div className="flex flex-col items-center justify-evenly gap-2">
                        <Image size={90} />
                        <p className="font-bold">Click here to browse image</p>
                      </div>
                      <input
                        {...register("postImage")}
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={selectImage}
                      />
                    </div>
                  </label>
                )}
              </div>
              <Input
                {...register("caption")}
                placeholder="Write something about your post"
                radius="sm"
                color="primary"
                variant="underlined"
              />
              <Button
                radius="sm"
                type="submit"
                color="primary">
                Create Post
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default CreatePostForm;

import { postSchemaType } from "@/utils/types";
import { postSchema } from "@/utils/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { useForm } from "react-hook-form";

const CreatePostForm = () => {
  const { register, handleSubmit } = useForm<postSchemaType>({
    resolver: zodResolver(postSchema),
  });

  const postFn = (postData: postSchemaType) => {
    console.log(postData);
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <Card className="">
          <CardBody>
            <form
              action=""
              className="flex flex-col space-y-5"
              onSubmit={handleSubmit(postFn)}>
              <Input
                type="text"
                radius="none"
                variant="underlined"
                placeholder="Say something about this post..."
                {...register("caption")}
              />
              <Input
                type="file"
                radius="none"
                variant="underlined"
                {...register("postImage")}
              />
              <Button type="submit">Create Post</Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default CreatePostForm;

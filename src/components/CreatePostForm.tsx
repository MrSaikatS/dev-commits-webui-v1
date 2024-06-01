import { postSchema, postSchemaType } from "@/utils/postSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { useForm } from "react-hook-form";

const CreatePostForm = () => {
  const {} = useForm();
  const { register, handleSubmit } = useForm<postSchemaType>({
    resolver: zodResolver(postSchema),
  });

  const postFn = () => {};

  return (
    <>
      <div className="flex items-center justify-center">
        <Card className="">
          <CardBody>
            <form
              action=""
              className="space-y-5"
              onSubmit={handleSubmit(postFn)}>
              <Input
                radius="none"
                variant="underlined"
                placeholder="Say something about this post..."
                {...register("caption")}
              />
              <Input
                type="file"
                radius="none"
                variant="underlined"
              />
            </form>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default CreatePostForm;

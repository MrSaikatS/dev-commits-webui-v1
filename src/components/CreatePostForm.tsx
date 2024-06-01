import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";

const CreatePostForm = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <Card className="">
          <CardBody>
            <form action="" className="space-y-5">
              <Input
                radius="none"
                variant="underlined"
                placeholder="Say something about this post..."
              />
              <Input type="file" radius="none" variant="underlined" />
            </form>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default CreatePostForm;

import { deletePost } from "@/utlis/apiQueries";
import { Button } from "@nextui-org/button";
import { useQueryClient } from "@tanstack/react-query";

const DeleteBtn = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();

  const dltFn = async () => {
    await deletePost(id);
    queryClient.refetchQueries({ queryKey: ["getMePost"] });
  };

  return (
    <>
      <div className="">
        <Button color="danger" onPress={dltFn}>
          Delete Post
        </Button>
      </div>
    </>
  );
};

export default DeleteBtn;

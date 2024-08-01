import { sdk } from "@/utlis/sdk";
import { Post } from "@/utlis/types";
import { deleteFile, deleteItem } from "@directus/sdk";
import { Button } from "@nextui-org/button";
import { useQueryClient } from "@tanstack/react-query";

const DeletePost = ({ detail }: { detail: Post }) => {
  const queryClient = useQueryClient();

  const deletFn = async () => {
    // await sdk.request(deleteFile( detail));
    // await sdk.request(deleteItem("posts", detail.id));
    // queryClient.refetchQueries();

    console.log(detail);
  };
  return (
    <>
      <Button color="secondary" onPress={deletFn}>
        Delete
      </Button>
    </>
  );
};

export default DeletePost;

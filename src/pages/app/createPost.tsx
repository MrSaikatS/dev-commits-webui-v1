import CreatePostForm from "@/components/CreatePostForm";

const createPost = () => {
  return (
    <>
      <div className="flex h-[90dvh] w-full items-center justify-center p-4">
        <CreatePostForm />
      </div>
    </>
  );
};

export default createPost;

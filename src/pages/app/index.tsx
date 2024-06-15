import CreatePostForm from "@/components/CreatePostForm";
import DisplayPostcard from "@/components/DisplayPostcard";

const index = () => {
  return (
    <>
      <div className="mx-auto mt-3 space-y-4 p-5">
        <CreatePostForm />
        <DisplayPostcard />
      </div>
    </>
  );
};

export default index;

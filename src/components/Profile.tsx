import { Avatar } from "@nextui-org/avatar";
import PostCard from "./PostCard";

const Profile = () => {
  return (
    <>
      <div className="w-full sm:p-4 grid place-items-center">
        <div className="sm:w-[45%] w-full p-5 flex flex-col justify-center items-center gap-5">
          <Avatar size="lg" src="/MYSELF2.jpg" className="w-32 h-32" />
          <div className="w-full flex flex-col justify-center items-center">
            <p className="font-bold text-2xl">Priyangsu Banik</p>
            <p className="">priyangsubanik2003@gmail.com</p>
          </div>
          <div className="space-y-2 w-full">
            <p className="font-bold">About</p>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              libero sed. Odit doloremque fugiat repellat. Lorem ipsum, dolor
              sit amet consectetur adipisicin
            </p>
          </div>
          <div className="space-y-4 w-full">
            <p className="font-bold text-xl">My Posts</p>
            <PostCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

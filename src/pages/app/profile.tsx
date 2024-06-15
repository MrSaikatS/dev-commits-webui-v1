import DisplayProfileCard from "@/components/DisplayProfileCard";
import Profile from "@/components/Profile";
import ProfileLoading from "@/components/ProfileLoading";

const profile = () => {
  return (
    <>
      <div className="mx-auto mt-3 space-y-4 p-5">
        <div className="">
          <Profile />
          <ProfileLoading />
        </div>

        <DisplayProfileCard />
      </div>
    </>
  );
};

export default profile;

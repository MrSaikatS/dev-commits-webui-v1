import ProfileDisplayCard from "@/components/sections/ProfileDisplayCard";
import UserProfile from "@/components/sections/UserProfile";
import { getAuthUser } from "@/utlis/tanstackqueries";

const profile = () => {
  const { data, isFetched, isSuccess } = getAuthUser();

  if (isFetched && isSuccess) {
    return (
      <>
        <div className="flex flex-col items-center">
          <UserProfile />

          <ProfileDisplayCard uId={data.id} />
        </div>
      </>
    );
  }
};

export default profile;

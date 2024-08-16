import LoadingProfileCrad from "@/components/Cards/LoadingProfileCrad";
import UserProfileCard from "@/components/Cards/UserProfileCard";
import UserNav from "@/components/UserNav";
import UserNavSkele from "@/components/UserNavSkele";

const edit = () => {
  return (
    <>
      <UserNav />
      <UserNavSkele />
      <div className="container mx-auto max-w-screen-xl p-6">
        <div className="grid grid-cols-1 place-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
          <UserProfileCard />
          <UserProfileCard />
          <UserProfileCard />
          <LoadingProfileCrad />
        </div>
      </div>
    </>
  );
};

export default edit;

import ProfileCard from "./ProfileCard";
import ProfileCardSkeleton from "./ProfileCardSkeleton";

const DisplayProfileCard = () => {
  return (
    <>
      <div className="grid grid-cols-1 place-items-center gap-6 md:grid-cols-2">
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCardSkeleton />
      </div>
    </>
  );
};

export default DisplayProfileCard;

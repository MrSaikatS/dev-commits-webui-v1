import { getUserPosts } from "@/utlis/tanstackqueries";
import UserProfileCard from "../cards/UserProfileCard";

type PropsTypes = {
  uId: string;
};

const ProfileDisplayCard = ({ uId }: PropsTypes) => {
  const { data } = getUserPosts(uId);

  return (
    <>
      <div className="">
        {data?.map((items) => {
          return <UserProfileCard key={items.id} detail={items} />;
        })}
      </div>
    </>
  );
};

export default ProfileDisplayCard;

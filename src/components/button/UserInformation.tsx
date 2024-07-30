import { getAuthUser } from "@/utlis/tanstackqueries";
import { Image } from "@nextui-org/image";

const UserInformation = () => {
  const { data, isFetched, isSuccess } = getAuthUser();

  if (isFetched && isSuccess) {
    return (
      <>
        <div>
          <div className="flex items-center gap-2">
            <Image
              src={
                data.avatar === null
                  ? `/MYSELF2.jpg`
                  : `http://localhost:8055/assets/${data.avatar}`
              }
              width={45}
              alt={data.first_name ? data.first_name : "User Name"}
              height={45}
              radius="full"
              loading="lazy"
              className="aspect-square p-1"
              isBlurred
            />

            <div className="text-xl">
              Hello,,
              <span className="font-bold">
                {data.first_name} {data?.last_name}
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default UserInformation;

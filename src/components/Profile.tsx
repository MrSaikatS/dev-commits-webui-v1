import { Image } from "@nextui-org/image";
import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { sdk } from "@/utils/sdk";
import { readMe } from "@directus/sdk";

const Profile = () => {
  const router = useRouter();
  const { data } = useQuery({
    queryKey: ["username"],
    queryFn: async () => {
      const req = await sdk.request(
        readMe({
          fields: ["*"],
        }),
      );
      return req;
    },
  });
  // console.log(data?.first_name);

  return (
    <>
      <Card
        isBlurred
        shadow="sm"
        className="border-none">
        <CardBody className="mb-2 mt-2 flex items-center justify-center gap-4 rounded-lg">
          <Image
            src="/MYSELF2.jpg"
            className="h-32 w-32 rounded-full"
          />

          <p className="text-2xl font-bold">{data?.first_name}</p>

          <p className="t">{data?.email}</p>

          <p className="font-bold">About</p>
          <Button
            type="button"
            color="primary"
            onClick={() => router.push(`/app/edit/${data?.id}`)}>
            Edit Your Profile
          </Button>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            libero sed. Odit doloremque fugiat repellat. Lorem ipsum, dolor sit
            amet consectetur adipisicin Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Beatae, libero sed. Odit doloremque fugiat
            repellat. Lorem ipsum, dolor sit amet consectetur adipisicin
          </p>
        </CardBody>
      </Card>
    </>
  );
};

export default Profile;

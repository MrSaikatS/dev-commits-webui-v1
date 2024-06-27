import { Image } from "@nextui-org/image";
import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/router";

const Profile = () => {
  const router = useRouter();
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

          <p className="text-2xl font-bold">Priyangsu Banik</p>
          <p className="t">priyangsubanik2003@gmail.com</p>

          <p className="font-bold">About</p>
          <Button
            type="button"
            color="primary"
            onClick={() =>
              router.push("/app/edit/61c7206e-36ac-4963-8801-f5fc28dbd0d3")
            }>
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

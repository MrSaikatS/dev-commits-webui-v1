import { Avatar } from "@nextui-org/avatar";
import { Card, CardBody } from "@nextui-org/card";

const Profile = () => {
  return (
    <>
      <Card
        isBlurred
        shadow="sm"
        className="border-none bg-gradient-to-r from-orange-500 to-orange-100">
        <CardBody className="mb-2 mt-2 flex items-center justify-center gap-4 rounded-lg bg-gradient-to-r from-orange-100 to-orange-300">
          <Avatar
            size="lg"
            src="/MYSELF2.jpg"
            className="h-32 w-32"
          />

          <p className="text-2xl font-bold text-slate-950">Priyangsu Banik</p>
          <p className="text-slate-950">priyangsubanik2003@gmail.com</p>

          <p className="font-bold text-slate-950">About</p>
          <p className="text-center text-slate-950">
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

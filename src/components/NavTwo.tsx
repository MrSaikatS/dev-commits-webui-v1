import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";
import Link from "next/link";

const NavTwo = () => {
  return (
    <>
      <div className="grid place-content-center mt-3">
        <Card className="w-[380px] sm:w-[500px]">
          <CardBody className="flex flex-col justify-center items-center space-y-1">
            <Image
              src={"/girl.png"}
              width={50}
              height={50}
              alt="Profile image"
            />
            <div className="">User Profile Name</div>
            <div className="space-x-4">
              <Button variant="shadow" color="success">
                <Link href={"/"}>Home</Link>
              </Button>
              <Button variant="shadow" color="success">
                <Link href={"/profile/edit"}>Profile</Link>
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default NavTwo;

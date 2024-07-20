import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import Link from "next/link";

const login = () => {
  return (
    <>
      <div className="grid h-screen place-items-center">
        <Card className="w-[300px]">
          <CardBody className="space-y-2">
            <div className="">Login to continue</div>
            <Input
              variant="flat"
              color="secondary"
              label="email"
            />
            <Input
              variant="flat"
              color="secondary"
              label="password"
            />
            <Button
              color="secondary"
              variant="flat">
              Log in
            </Button>
            <div className="">
              dont have an account?{" "}
              <Link
                href="/auth/signup"
                className="font-bold text-purple-600">
                Register
              </Link>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default login;

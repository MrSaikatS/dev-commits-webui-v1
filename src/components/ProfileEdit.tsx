import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";

import { Avatar } from "@nextui-org/avatar";

const ProfileEdit = () => {
  return (
    <>
      <form className="flex h-[70dvh] items-center justify-center">
        <Card className="w-[500px]">
          <CardBody className="flex items-center space-y-8">
            <Avatar
              size="lg"
              src="/MYSELF2.jpg"
              className="h-32 w-32"
            />

            <Input label="Enter Your Profile Name" />
            <Input label="Enter Your Profile Email" />
            <Input label="Enter Your Bio Or About" />
            <Button
              type="submit"
              color="primary"
              variant="shadow"
              radius="md"
              fullWidth>
              Update Your Profile
            </Button>
          </CardBody>
        </Card>
      </form>
    </>
  );
};

export default ProfileEdit;

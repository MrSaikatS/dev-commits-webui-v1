import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
const register = () => {
  return (
    <>
      <div className="grid place-items-center h-screen">
        <Card>
          <CardBody>
            <Input label="" placeholder="enter your first Name" />
            <Input placeholder="enter your Second Name" />
            <Input placeholder="enter your Email" />
            <Input placeholder="enter your Password" />
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default register;

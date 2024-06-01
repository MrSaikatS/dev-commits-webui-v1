import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";

const LoginForm = () => {
  return (
    <>
      {/* Login Form Code */}
      <Card>
        <CardBody>
          <form>
            <div className="space-y-5">
              <Input
                color="primary"
                variant="bordered"
                label="Email"
              />
              <Input
                color="primary"
                variant="bordered"
                label="Password"
              />
              <Button
                type="submit"
                size="lg"
                color="primary"
                variant="shadow"
                fullWidth>
                Login
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </>
  );
};

export default LoginForm;

import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardBody } from "@nextui-org/card";
import LoginForm from "@/components/LoginForm";
import RegisterUserForm from "@/components/RegisterUserForm";

const index = () => {
  return (
    <>
      <div className="flex justify-center h-dvh">
        <div className="min-w-[500px] mt-[10%]">
          <Tabs size="lg" color="secondary" variant="solid" fullWidth>
            <Tab key="login" title="Login">
              <Card>
                <CardBody>
                  <LoginForm />
                </CardBody>
              </Card>
            </Tab>
            <Tab key="register" title="Register">
              <Card>
                <CardBody>
                  <RegisterUserForm />
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default index;

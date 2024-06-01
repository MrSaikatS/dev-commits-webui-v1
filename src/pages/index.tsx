import LoginForm from "@/components/LoginForm";
import RegisterUserForm from "@/components/RegisterUserForm";
import { Tab, Tabs } from "@nextui-org/tabs";

const index = () => {
  return (
    <>
      <div className="flex h-dvh justify-center">
        <div className="mt-[17%] min-w-[300px]">
          <Tabs
            size="lg"
            color="secondary"
            variant="solid"
            fullWidth>
            <Tab
              key="login"
              title="Login">
              <LoginForm />
            </Tab>
            <Tab
              key="register"
              title="Register">
              <RegisterUserForm />
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default index;

import LoginForm from "@/components/LoginForm";
import RegisterUserForm from "@/components/RegisterUserForm";
import { Tab, Tabs } from "@nextui-org/tabs";

const index = () => {
  return (
    <>
      <div className="mt-12 flex h-dvh items-center justify-center">
        <div className="h-[670px] min-w-[25%]">
          <Tabs
            size="lg"
            color="primary"
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
          {/* <div className="mt-8 flex items-center justify-center gap-3">
            <span>DarkMode Button</span>
            <DarkMode />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default index;

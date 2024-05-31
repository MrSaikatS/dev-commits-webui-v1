import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

const LoginForm = () => {
  return (
    <>
      {/* Login Form Code */}

      <form>
        <div className="space-y-4">
          <Input color="primary" variant="bordered" label="Email" />
          <Input color="primary" variant="bordered" label="Password" />

          <Button
            type="button"
            className="bg-blue-600"
            variant="shadow"
            fullWidth
          >
            Login
          </Button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;

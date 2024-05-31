import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

const RegisterUserForm = () => {
  return (
    <>
      <form>
        <div className="space-y-5">
          <Input color="secondary" variant="bordered" label="First Name" />
          <Input color="secondary" variant="bordered" label="Last Name" />
          <Input color="secondary" variant="bordered" label="Email" />
          <Input color="secondary" variant="bordered" label="Password" />
          <Button fullWidth color="secondary" variant="shadow" type="submit">
            Register User
          </Button>
        </div>
      </form>
    </>
  );
};

export default RegisterUserForm;

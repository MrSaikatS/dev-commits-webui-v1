import { loginSchema, loginSchemaType } from "@/utlis/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const [passwordIcon, setPasswordIcon] = useState(false);

  const loginPasswordIcon = () => setPasswordIcon(!passwordIcon);

  const loginfunction = () => {};

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

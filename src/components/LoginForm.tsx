import { loginSchema, loginSchemaType } from "@/utlis/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Eye, EyeOff, Send } from "lucide-react";
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

      <form onSubmit={handleSubmit(loginfunction)}>
        <div className="space-y-4">
          <Input
            color="primary"
            variant="bordered"
            label="Email"
            placeholder="Enter Your Email"
            {...register("email")}
            errorMessage={errors.email?.message}
            isInvalid={errors.email?.message ? true : false}
          />
          <Input
            color="primary"
            variant="bordered"
            label="Password"
            placeholder="Enter Your Password"
            {...register("password")}
            errorMessage={errors.password?.message}
            isInvalid={errors.password?.message ? true : false}
            endContent={
              <button
                type="button"
                className="focus:outline-none"
                onClick={loginPasswordIcon}
              >
                {passwordIcon ? (
                  <Eye className="pointer-events-none text-2xl text-default-400" />
                ) : (
                  <EyeOff className="pointer-events-none text-2xl text-default-400" />
                )}
              </button>
            }
            type={passwordIcon ? "text" : "password"}
          />

          <Button
            type="submit"
            className="bg-blue-600"
            variant="shadow"
            fullWidth
            isLoading={isSubmitting}
            isDisabled={isSubmitting}
          >
            {isSubmitting ? "" : "Sign in"}
          </Button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;

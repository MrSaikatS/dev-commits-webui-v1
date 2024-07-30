import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormType } from "@/utlis/types";
import { loginSchema } from "@/utlis/zodschema";
import { Eye, EyeOff, UserCheck } from "lucide-react";
import { useState } from "react";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { sdk } from "@/utlis/sdk";
import { useRouter } from "next/router";

import { toast } from "sonner";

const LoginForm = () => {
  const [loginVisibleicon, setLoginVisibleIcon] = useState(false);

  const router = useRouter();

  // Validtaion Code
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
  });

  //   Backend Function
  const loginfunction = async (fdata: LoginFormType) => {
    try {
      await sdk.login(fdata.email, fdata.password, {
        mode: "session",
      });

      reset();

      toast.info("User Login Successfully.", {
        icon: <UserCheck size={20} color="blue" />,
      });
    } catch (error: any) {
      // console.log(error.errors[0].message);
      toast.error(error.errors[0].message);
    }

    router.push("/app/");
  };

  return (
    <div>
      <div className="grid h-screen place-items-center">
        <Card className="w-[350px] sm:w-[500px]">
          <CardBody className="space-y-11">
            <div className="text-center text-2xl font-bold">
              Login to continue
            </div>
            <form onSubmit={handleSubmit(loginfunction)}>
              <div className="space-y-10">
                <Input
                  {...register("email")}
                  color="secondary"
                  type="email"
                  variant="faded"
                  label="Email"
                  size="sm"
                  isInvalid={errors.email ? true : false}
                  errorMessage={errors.email?.message}
                />
                <Input
                  {...register("password")}
                  color="secondary"
                  variant="faded"
                  label="Password"
                  size="sm"
                  isInvalid={errors.password ? true : false}
                  errorMessage={errors.password?.message}
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={() => setLoginVisibleIcon(!loginVisibleicon)}
                    >
                      {loginVisibleicon ? (
                        <Eye className="stroke-blue-600" />
                      ) : (
                        <EyeOff className="stroke-blue-600" />
                      )}
                    </button>
                  }
                  type={loginVisibleicon ? "text" : "password"}
                />
                <Button
                  isLoading={isSubmitting}
                  type="submit"
                  size="lg"
                  color="secondary"
                  variant="solid"
                  radius="sm"
                  fullWidth
                >
                  Log in
                </Button>
              </div>
            </form>

            <div className="text-center">
              Dont have an account?
              <Link href="/register" className="font-bold text-purple-600">
                Register
              </Link>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default LoginForm;

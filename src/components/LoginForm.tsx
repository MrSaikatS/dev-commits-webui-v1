import { sdk } from "@/utils/sdk";
import { loginSchemaType } from "@/utils/types";
import { userLoginSchema } from "@/utils/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Tooltip } from "@nextui-org/tooltip";
import { Eye, EyeOff, Network, UserCheck } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const LoginForm = () => {
  const [loginVisibleicon, setLoginVisibleIcon] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<loginSchemaType>({
    resolver: zodResolver(userLoginSchema),
  });

  const loginFunction = async (fdata: loginSchemaType) => {
    // await new Promise<void>((r) => setTimeout(r, 2000));
    // console.log(fdata);

    await sdk.login(fdata.email, fdata.password, {
      mode: "session",
    });

    toast.info("User Login Successfully.", {
      icon: (
        <UserCheck
          size={20}
          color="blue"
        />
      ),
    });
  };

  return (
    <>
      {/* Login Form Code */}
      <Card>
        <CardBody>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-slate-100 p-4 text-blue-600">
              <Network />
            </div>
            <div className="flex flex-col">
              <p className="text-xl font-bold uppercase">Dev Commits</p>
              <p className="text-sm">Post anything freely</p>
            </div>
          </div>
          <div className="my-8 space-y-2">
            <p className="text-3xl font-bold">Login</p>
            <p className="w-[80%]">
              Welcome back, enter details to login to your account.
            </p>
          </div>
          <form onSubmit={handleSubmit(loginFunction)}>
            <div className="space-y-5">
              <Input
                {...register("email")}
                color="primary"
                type="email"
                variant="faded"
                label="Email"
                size="sm"
                isInvalid={errors.email ? true : false}
                errorMessage={errors.email?.message}
              />
              <Input
                {...register("password")}
                color="primary"
                variant="faded"
                label="Password"
                size="sm"
                isInvalid={errors.password ? true : false}
                errorMessage={errors.password?.message}
                endContent={
                  <Tooltip
                    content="Password Show-Hide"
                    color="primary"
                    shadow="md"
                    radius="lg"
                    showArrow={true}>
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={() => setLoginVisibleIcon(!loginVisibleicon)}>
                      {loginVisibleicon ? (
                        <Eye className="stroke-blue-600" />
                      ) : (
                        <EyeOff className="stroke-blue-600" />
                      )}
                    </button>
                  </Tooltip>
                }
                type={loginVisibleicon ? "text" : "password"}
              />
              <Button
                isLoading={isSubmitting}
                type="submit"
                size="lg"
                color="primary"
                variant="solid"
                radius="sm"
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

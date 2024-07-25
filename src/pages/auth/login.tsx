import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { loginSchemaType } from "@/utlis/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { userLoginSchema } from "@/utlis/zodschema";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/router";

const login = () => {
  const [loginVisibleicon, setLoginVisibleIcon] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<loginSchemaType>({
    resolver: zodResolver(userLoginSchema),
  });

  const loginfunction = async (fdata: loginSchemaType) => {
    await new Promise<void>((r) => setTimeout(r, 2000));

    console.log(fdata);

    toast.success("succesfully Loginuser");
    router.push("/app");
  };

  return (
    <>
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
                      onClick={() => setLoginVisibleIcon(!loginVisibleicon)}>
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
                  fullWidth>
                  Log in
                </Button>
              </div>
            </form>

            <div className="text-center">
              Dont have an account?{" "}
              <Link
                href="/auth/signup"
                className="font-bold text-purple-600">
                Register
              </Link>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default login;

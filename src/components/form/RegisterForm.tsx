import { RegisterFormType } from "@/utlis/types";
import { registerSchema } from "@/utlis/zodschema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Eye, EyeOff, UserCheck } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { sdk } from "@/utlis/sdk";
import { createUser } from "@directus/sdk";

const RegisterForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  // const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<RegisterFormType>({
    resolver: zodResolver(registerSchema),
  });

  const userRegisterFunction = async (fdata: RegisterFormType) => {
    console.log(fdata);
    try {
      await sdk.request(createUser(fdata));

      toast.info("User Registration Successfully.", {
        icon: <UserCheck size={20} color="blue" />,
      });
      reset();
    } catch (error: any) {
      toast.error(`Email already registered`);
    }
    // router.reload();
  };

  return (
    <>
      <div className="grid h-screen place-items-center">
        <Card className="w-[380px] sm:w-[500px]">
          <CardBody className="space-y-11">
            <div className="text-center text-2xl font-bold">
              Create account Welcome user
            </div>

            <form onSubmit={handleSubmit(userRegisterFunction)}>
              <div className="space-y-10">
                <Input
                  defaultValue="f157cb72-fa69-445e-9516-3eb139c5536d"
                  className="hidden"
                  {...register("role")}
                />
                <Input
                  {...register("first_name")}
                  color="secondary"
                  type="text"
                  variant="faded"
                  label="First Name"
                  size="sm"
                  isInvalid={errors.first_name ? true : false}
                  errorMessage={errors.first_name?.message}
                />
                <Input
                  {...register("last_name")}
                  color="secondary"
                  type="text"
                  variant="faded"
                  label="Last Name"
                  size="sm"
                  isInvalid={errors.last_name ? true : false}
                  errorMessage={errors.last_name?.message}
                />
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
                      onClick={() => setPasswordVisible(!passwordVisible)}
                    >
                      {passwordVisible ? (
                        <Eye className="stroke-blue-500" />
                      ) : (
                        <EyeOff className="stroke-blue-500" />
                      )}
                    </button>
                  }
                  type={passwordVisible ? "text" : "password"}
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
                  Create account
                </Button>
              </div>
            </form>
            <div className="text-center">
              Already have an account?
              <Link href="/" className="font-bold text-purple-600">
                Login
              </Link>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default RegisterForm;

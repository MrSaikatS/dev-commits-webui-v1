import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, Loginschemtype } from "@/utlis/zodschema";
import { sdk } from "@/utlis/sdk";
import { login } from "@directus/sdk";

const signin = () => {
  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitting },
  } = useForm<Loginschemtype>({
    resolver: zodResolver(loginSchema),
  });

  // Backend

  const onsubmit = async (fdata: Loginschemtype) => {
    try {
      await sdk.login(fdata.email, fdata.password, {
        mode: "session",
      });
    } catch (error) {
      console.log(typeof error);
    }
  };

  return (
    <div className="grid place-content-center h-screen">
      <Card className="w-[380px] sm:w-[500px]">
        <CardBody>
          <div className="text-center font-bold">Login to Continue.....</div>
          <form onSubmit={handleSubmit(onsubmit)} className="space-y-5">
            <Input
              {...register("email")}
              variant="bordered"
              placeholder="Enter the Email"
              isInvalid={errors.email ? true : false}
              errorMessage={errors.email?.message}
            />
            <Input
              {...register("password")}
              variant="bordered"
              placeholder="Enter the Password"
              isInvalid={errors.email ? true : false}
              errorMessage={errors.email?.message}
            />
            <Button color="primary" isLoading={isSubmitting} type="submit">
              Login
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default signin;

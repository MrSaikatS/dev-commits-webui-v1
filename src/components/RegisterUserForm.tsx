import { UserRegisterSchmeaType } from "@/utils/types";
import { userRegisterSchmea } from "@/utils/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Network } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";

const RegisterUserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<UserRegisterSchmeaType>({
    resolver: zodResolver(userRegisterSchmea),
  });

  const userRegisterFunction: SubmitHandler<UserRegisterSchmeaType> = (
    data,
  ) => {
    console.log(data);
  };

  return (
    <>
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
            <p className="text-3xl font-bold">Create account</p>
            <p className="w-[80%]">
              Welcome user, enter your details to create your account.
            </p>
          </div>
          <form onSubmit={handleSubmit(userRegisterFunction)}>
            <div className="space-y-5">
              <Input
                {...register("first_name")}
                color="primary"
                type="text"
                variant="faded"
                label="First Name"
                size="sm"
                isInvalid={errors.first_name ? true : false}
                errorMessage={errors.first_name?.message}
              />
              <Input
                {...register("last_name")}
                color="primary"
                type="text"
                variant="faded"
                label="Last Name"
                size="sm"
                isInvalid={errors.last_name ? true : false}
                errorMessage={errors.last_name?.message}
              />
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
                type="password"
                variant="faded"
                label="Password"
                size="sm"
                isInvalid={errors.password ? true : false}
                errorMessage={errors.password?.message}
              />
              <Button
                isLoading={isSubmitting}
                type="submit"
                size="lg"
                color="primary"
                variant="solid"
                radius="sm"
                fullWidth>
                Create account
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </>
  );
};

export default RegisterUserForm;

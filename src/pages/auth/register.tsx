import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Loginschemtype,
  registerSchema,
  Registerschemtype,
} from "@/utlis/zodschema";
import { registerUser } from "@/utlis/apiQueries";
import { useRouter } from "next/router";

const register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Registerschemtype>({
    resolver: zodResolver(registerSchema),
  });

  const { push } = useRouter();

  // Backend

  const onsubmit = async (fdata: Registerschemtype) => {
    const login = await registerUser(fdata);
    if (login) {
      push("/");
      reset();
    }
  };

  return (
    <div className="grid place-content-center h-screen">
      <Card className="w-[380px] sm:w-[500px]">
        <CardBody>
          <div className="text-center font-bold">Register to Continue.....</div>
          <form onSubmit={handleSubmit(onsubmit)} className="space-y-5">
            <Input
              {...register("first_name")}
              variant="bordered"
              placeholder="Enter the Email"
              isInvalid={errors.first_name ? true : false}
              errorMessage={errors.first_name?.message}
            />

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
              Resgister
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default register;

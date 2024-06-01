import { UserRegisterSchmeaType } from "@/utils/types";
import { userRegisterSchmea } from "@/utils/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { useForm } from "react-hook-form";

const RegisterUserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<UserRegisterSchmeaType>({
    resolver: zodResolver(userRegisterSchmea),
  });

  const userRegisterFunction = () => {};

  return (
    <>
      <Card>
        <CardBody>
          <form onSubmit={handleSubmit(userRegisterFunction)}>
            <div className="space-y-5">
              <Input
                color="secondary"
                variant="bordered"
                label="First Name"
                {...register("first_name")}
                errorMessage={errors.first_name?.message}
                isInvalid={errors.first_name?.message ? true : false}
              />
              <Input
                color="secondary"
                variant="bordered"
                label="Last Name"
                {...register("last_name")}
                errorMessage={errors.last_name?.message}
                isInvalid={errors.last_name?.message ? true : false}
              />

              <Input
                color="secondary"
                variant="bordered"
                label="Email"
                {...register("email")}
                errorMessage={errors.email?.message}
                isInvalid={errors.email?.message ? true : false}
              />
              <Input
                color="secondary"
                variant="bordered"
                label="Password"
                {...register("password")}
                errorMessage={errors.password?.message}
                isInvalid={errors.password?.message ? true : false}
              />
              <Button
                fullWidth
                color="secondary"
                variant="shadow"
                type="submit"
                isLoading={isSubmitting}>
                {isSubmitting ? "" : "Submit"}
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </>
  );
};

export default RegisterUserForm;

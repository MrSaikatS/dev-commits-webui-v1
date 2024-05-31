import { userRegisterSchmea, UserRegisterSchmeaType } from "@/utlis/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useForm } from "react-hook-form";

// Register Form Validation

const RegisterUserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<UserRegisterSchmeaType>({
    resolver: zodResolver(userRegisterSchmea),
  });

  const registerFunction = () => {};
  return (
    <>
      <form onSubmit={handleSubmit(registerFunction)}>
        <div className="space-y-5">
          <Input
            color="secondary"
            variant="bordered"
            label="First Name"
            {...register("first_Name")}
            errorMessage={errors.first_Name?.message}
            isInvalid={errors.first_Name?.message ? true : false}
          />
          <Input
            color="secondary"
            variant="bordered"
            label="Last Name"
            {...register("last_Name")}
            errorMessage={errors.last_Name?.message}
            isInvalid={errors.last_Name?.message ? true : false}
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
            isLoading={isSubmitting}
            isDisabled={isSubmitting}
          >
            {isSubmitting ? "" : "Submit"}
          </Button>
        </div>
      </form>
    </>
  );
};

export default RegisterUserForm;

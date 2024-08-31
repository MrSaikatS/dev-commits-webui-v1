import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, Registerschemtype } from "@/utlis/zodschema";
import { registerUser } from "@/utlis/apiQueries";
import { useRouter } from "next/router";
import { Divider } from "@nextui-org/divider";
import Link from "next/link";
import { useState } from "react";

const register = () => {
  const [userEmailCheck, setUserEmailCheck] = useState("");
  // const [email, setEmail] = useState("");

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

  // const emailCheckingfn = async (fdata: Registerschemtype) => {
  //   const isregistered = await checkEmail(fdata.email);

  //   if (isregistered) {
  //     setUserEmailCheck(`${email} already in use`);
  //   }
  // };

  const onsubmit = async (fdata: Registerschemtype) => {
    const emailRegistered = await registerUser(fdata);
    console.log(emailRegistered);

    // if (emailRegistered) {
    //   setUserEmailCheck(`${fdata.email} already in use`);
    // } else {
    //   push("/auth/signin");
    //   reset();
    // }
  };

  return (
    <div className="grid place-content-center h-screen">
      <Card className="w-[380px] sm:w-[350px]">
        <CardBody className="p-4 space-y-8">
          <div className="space-y-1">
            <div className="font-bold text-3xl">Register</div>
            <div className="text-slate-500">Enter your details to continue</div>
          </div>

          <form onSubmit={handleSubmit(onsubmit)} className="space-y-5">
            <Input
              {...register("first_name")}
              variant="bordered"
              placeholder="Enter your first name"
              isInvalid={errors.first_name ? true : false}
              errorMessage={errors.first_name?.message}
            />
            <div className="flex items-center gap-3">
              <Input
                {...register("email")}
                variant="bordered"
                placeholder="Enter your Email"
                isInvalid={errors.email ? true : false}
                errorMessage={errors.email?.message}
              />
              {/* <Button
                type="submit"
                onPress={handleSubmit(emailCheckingfn)}
                variant="flat"
                color="primary"
                isIconOnly
              >
                <Check />
              </Button> */}
            </div>

            <Input
              {...register("password")}
              variant="bordered"
              placeholder="Enter your Password"
              isInvalid={errors.email ? true : false}
              errorMessage={errors.email?.message}
            />
            {userEmailCheck !== "" && (
              <>
                <p className="text-red-600">{userEmailCheck}</p>
              </>
            )}
            <Button
              fullWidth
              color="primary"
              isLoading={isSubmitting}
              type="submit"
            >
              Resgister
            </Button>
          </form>
          <Divider />
          <div className="flex justify-center items-center gap-2">
            <p>Already Have An Account ?</p>
            <Link className="text-blue-500 font-bold" href={"/auth/signin"}>
              SignIn
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default register;

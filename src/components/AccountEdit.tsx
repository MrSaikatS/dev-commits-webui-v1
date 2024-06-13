import { accountEditSchemaType } from "@/utils/types";
import { accountEditSchema } from "@/utils/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

import { useForm } from "react-hook-form";

const AccountEdit = () => {
  const [loginVisibleicon, setLoginVisibleIcon] = useState(false);
  // validation Code2

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<accountEditSchemaType>({
    resolver: zodResolver(accountEditSchema),
  });

  // main function account edit

  const accountEditFunc = (accounteditdata: accountEditSchemaType) => {
    console.log(accounteditdata);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(accountEditFunc)}
        className="flex h-[70dvh] items-center justify-center">
        <Card
          shadow="md"
          className="w-[500px]">
          <CardHeader className="flex-col items-center gap-2">
            <p className="text-lg font-bold">DevCommits Account Edit Form</p>
          </CardHeader>
          <CardBody className="space-y-8">
            <Input
              variant="bordered"
              color="primary"
              radius="md"
              label="Enter Your First Name"
              {...register("first_name")}
              isInvalid={!!errors.first_name?.message}
              errorMessage={errors.first_name?.message}
            />
            <Input
              variant="bordered"
              color="primary"
              radius="md"
              label="Enter Your Last Name"
              {...register("last_name")}
              isInvalid={!!errors.last_name?.message}
              errorMessage={errors.last_name?.message}
            />
            <Input
              variant="bordered"
              color="primary"
              radius="md"
              type="email"
              label="Enter Your Email"
              {...register("email")}
              isInvalid={!!errors.email?.message}
              errorMessage={errors.email?.message}
            />
            <Input
              variant="bordered"
              color="primary"
              radius="md"
              label="Enter Your Password"
              {...register("password")}
              isInvalid={!!errors.password?.message}
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
              type="submit"
              color="primary"
              variant="shadow"
              radius="md"
              fullWidth
              isLoading={isSubmitting}>
              Account Edit
            </Button>
          </CardBody>
        </Card>
      </form>
    </>
  );
};

export default AccountEdit;

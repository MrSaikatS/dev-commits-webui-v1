import { UpdateProfileSchemaType } from "@/utlis/types";
import { updateProfileSchema } from "@/utlis/zodschema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const id = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<UpdateProfileSchemaType>({
    resolver: zodResolver(updateProfileSchema),
  });

  // Main Function
  const updateProfileFunc = async (updatedata: UpdateProfileSchemaType) => {
    await new Promise<void>((r) => setTimeout(r, 2000));
    console.log(updatedata);

    toast.success("Update Profile Information");

    router.push("/app/profile");
  };

  return (
    <>
      <div className="grid h-screen place-items-center">
        <Card className="w-[380px] sm:w-[500px]">
          <CardBody className="space-y-11">
            <div className="text-center text-2xl font-bold">
              Update Your Profile Information
            </div>

            <form onSubmit={handleSubmit(updateProfileFunc)}>
              <div className="space-y-10">
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
                  {...register("title")}
                  color="secondary"
                  type="text"
                  variant="faded"
                  label="Title"
                  size="sm"
                  isInvalid={errors.title ? true : false}
                  errorMessage={errors.title?.message}
                />
                <Input
                  {...register("description")}
                  color="secondary"
                  variant="faded"
                  type="text"
                  label="Description"
                  size="sm"
                  isInvalid={errors.description ? true : false}
                  errorMessage={errors.description?.message}
                />
                <Button
                  isLoading={isSubmitting}
                  type="submit"
                  size="lg"
                  color="secondary"
                  variant="solid"
                  radius="sm"
                  fullWidth>
                  Update Profile Data
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default id;

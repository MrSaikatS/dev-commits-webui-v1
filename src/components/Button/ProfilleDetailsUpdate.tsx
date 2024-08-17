import {
  updateProfileSchema,
  UpdateProfileSchemaType,
} from "@/utlis/zodschema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const ProfilleDetailsUpdate = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<UpdateProfileSchemaType>({
    resolver: zodResolver(updateProfileSchema),
  });

  const updateProfileFunc = async (infodata: UpdateProfileSchemaType) => {
    await new Promise<void>((r) => setTimeout(r, 2000));
    console.log(infodata);
    toast.info("User details updated Successfully.");
    console.log(infodata);
  };

  return (
    <>
      <Card>
        <CardBody>
          <form
            onSubmit={handleSubmit(updateProfileFunc)}
            className="space-y-6"
          >
            <Input
              label="Enter Your First Name"
              variant="bordered"
              color="primary"
              radius="md"
              {...register("first_name")}
              isInvalid={!!errors.first_name?.message}
              errorMessage={errors.first_name?.message}
            />
            <Input
              label="Enter Your Last Name"
              variant="bordered"
              color="primary"
              radius="md"
              {...register("last_name")}
              isInvalid={!!errors.last_name?.message}
              errorMessage={errors.last_name?.message}
            />
            <Input
              label="Enter Your Nick Name"
              variant="bordered"
              color="primary"
              radius="md"
              {...register("title")}
              isInvalid={!!errors.title?.message}
              errorMessage={errors.title?.message}
            />
            <Input
              label="Enter Your Email Id"
              variant="bordered"
              color="primary"
              radius="md"
              {...register("email")}
              isInvalid={!!errors.email?.message}
              errorMessage={errors.email?.message}
            />
            <Input
              label="Enter Your Description"
              variant="bordered"
              color="primary"
              radius="md"
              {...register("description")}
              isInvalid={!!errors.description?.message}
              errorMessage={errors.description?.message}
            />
            <Button
              type="submit"
              color="primary"
              variant="shadow"
              radius="md"
              fullWidth
              isLoading={isSubmitting}
            >
              Update Your Account Profile
            </Button>
          </form>
        </CardBody>
      </Card>
    </>
  );
};

export default ProfilleDetailsUpdate;

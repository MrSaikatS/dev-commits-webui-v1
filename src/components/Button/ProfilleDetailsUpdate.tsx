import { updateProfileDetails } from "@/utlis/apiQueries";
import {
  updateProfileSchema,
  UpdateProfileSchemaType,
} from "@/utlis/zodschema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Modal, ModalContent, useDisclosure } from "@nextui-org/modal";
import { useQueryClient } from "@tanstack/react-query";
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

  const queryClient = useQueryClient();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const updateProfileFunc = async (infodata: UpdateProfileSchemaType) => {
    await updateProfileDetails(infodata);
    onOpenChange();
    queryClient.refetchQueries({ queryKey: ["getMe"] });
  };

  return (
    <>
      <div className="">
        <Button size="lg" color="warning" variant="ghost" onPress={onOpen}>
          Update Profile
        </Button>
      </div>

      <Modal backdrop="opaque" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onclose) => (
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
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfilleDetailsUpdate;

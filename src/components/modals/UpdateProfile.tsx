import { UpdateProfileFormType } from "@/utlis/types";
import { updateProfileSchema } from "@/utlis/zodschema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { useForm } from "react-hook-form";

const UpdateProfile = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<UpdateProfileFormType>({
    resolver: zodResolver(updateProfileSchema),
  });

  const updateProfilebtn = (fdata: UpdateProfileFormType) => {
    console.log(fdata);
  };

  return (
    <div>
      <div className="">
        <Button size="lg" color="secondary" variant="ghost" onPress={onOpen}>
          Update Profile
        </Button>

        <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="text-xl">
                  Update Profile Details
                </ModalHeader>
                <ModalBody className="mb-6">
                  <form
                    onSubmit={handleSubmit(updateProfilebtn)}
                    className="grid grid-flow-row grid-cols-2 gap-4"
                    noValidate
                  >
                    <Input
                      color="primary"
                      variant="bordered"
                      label="First Name"
                      className="col-span-2"
                      {...register("first_name")}
                      errorMessage={errors.first_name?.message}
                      isInvalid={!!errors.first_name?.message}
                    />

                    <Input
                      color="primary"
                      variant="bordered"
                      label="Last Name"
                      className="col-span-2"
                      {...register("last_name")}
                      errorMessage={errors.last_name?.message}
                      isInvalid={!!errors.last_name?.message}
                    />

                    <Input
                      color="primary"
                      variant="bordered"
                      label="Title"
                      className="col-span-2"
                      {...register("title")}
                      errorMessage={errors.title?.message}
                      isInvalid={!!errors.title?.message}
                    />

                    <Input
                      color="primary"
                      variant="bordered"
                      label="Description"
                      className="col-span-2"
                      {...register("description")}
                      errorMessage={errors.description?.message}
                      isInvalid={!!errors.description?.message}
                    />

                    <Button
                      size="lg"
                      color="danger"
                      variant="ghost"
                      type="reset"
                    >
                      Discard
                    </Button>
                    <Button
                      size="lg"
                      color="primary"
                      variant="ghost"
                      type="submit"
                    >
                      Update
                    </Button>
                  </form>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default UpdateProfile;

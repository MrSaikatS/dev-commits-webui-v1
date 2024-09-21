import { deletePost } from "@/utlis/apiQueries";
import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { useQueryClient } from "@tanstack/react-query";
import { Trash } from "lucide-react";
import { useState } from "react";

const DeleteBtn = ({ id }: { id: string }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setloading] = useState(false);

  const queryClient = useQueryClient();

  const dltFn = async () => {
    setloading(true);
    await deletePost(id);

    queryClient.refetchQueries({ queryKey: ["getMePost"] });
    setloading(false);
    onOpenChange();
  };

  return (
    <>
      <div className="">
        <Button color="danger" onPress={onOpen} isIconOnly variant="light">
          <Trash />
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onclose) => (
              <>
                <ModalHeader>Are You Sure ?</ModalHeader>
                <ModalBody>This action cannot be undone</ModalBody>
                <ModalFooter>
                  <div className="flex justify-end items-center gap-2">
                    <Button
                      onPress={dltFn}
                      isLoading={loading}
                      color="danger"
                      spinner={
                        <svg
                          className="animate-spin h-5 w-5 text-current"
                          fill="none"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            fill="currentColor"
                          />
                        </svg>
                      }
                    >
                      Delete
                    </Button>
                    <Button>Cancel</Button>
                  </div>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};

export default DeleteBtn;

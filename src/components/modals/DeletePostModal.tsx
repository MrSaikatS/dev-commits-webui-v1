import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/modal";
import { Trash2 } from "lucide-react";

type DeleteModalProps = {
  isOpen: boolean;
  onOpenChange: () => void;
};

const DeletePostModal = ({ isOpen, onOpenChange }: DeleteModalProps) => {
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <p className="text-xl font-bold">Are you sure?</p>
              </ModalHeader>
              <ModalBody>
                <p className="">
                  If you continue then this post will be deleted permanently.
                  This can't be undone
                </p>
              </ModalBody>
              <ModalFooter>
                <Button
                  radius="sm"
                  color="danger"
                  onPress={onClose}
                  className="flex items-center gap-2"
                >
                  <Trash2 />
                  <p className="">Delete</p>
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeletePostModal;

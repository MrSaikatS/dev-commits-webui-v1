import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/modal";
import { Trash2 } from "lucide-react";

const DeletePostModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const deleteFn = () => {};

  return (
    <>
      <div className="">
        <Button
          variant="ghost"
          color="danger"
          isIconOnly
          onPress={onOpen}>
          <Trash2 color="red" />
        </Button>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          size="sm">
          <ModalContent>
            {(onClose) => (
              <>
                <ModalBody className="p-6">
                  <div className="text-center text-xl font-semibold">
                    Are you sure want to delete this post?
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      radius="sm"
                      onPress={deleteFn}
                      color="secondary"
                      variant="ghost"
                      fullWidth>
                      Yes
                    </Button>
                    <Button
                      onPress={onClose}
                      radius="sm"
                      type="submit"
                      color="danger"
                      variant="ghost"
                      fullWidth>
                      Cancel
                    </Button>
                  </div>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};

export default DeletePostModal;

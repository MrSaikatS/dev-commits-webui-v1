import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/modal";
import { Plus } from "lucide-react";
import CreatePostForm from "./CreatePostForm";

const Fab = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="fixed bottom-10 right-10 z-20">
        <Button
          onPress={onOpen}
          color="primary"
          variant="shadow"
          radius="full"
          isIconOnly
          className="h-16 w-16">
          <Plus size={40} />
        </Button>
      </div>
      <Modal
        // placement="center"
        isOpen={isOpen}
        onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="p-6">
                <CreatePostForm />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Fab;
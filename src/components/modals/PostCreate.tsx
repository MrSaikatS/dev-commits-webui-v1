import { Button } from "@nextui-org/button";
import { FileDigit, Heading2, Plus } from "lucide-react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import PostCreationForm from "../form/PostCreationForm";

const PostCreate = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div>
      <div className="fixed bottom-9 right-10 z-50">
        <Button
          color="primary"
          variant="shadow"
          radius="full"
          isIconOnly
          className="h-16 w-16"
          onPress={onOpen}
        >
          <Plus size={40} />
        </Button>
      </div>

      <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="text-xl">What's new to post?</ModalHeader>
              <ModalBody className="mb-6">
                <PostCreationForm />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default PostCreate;

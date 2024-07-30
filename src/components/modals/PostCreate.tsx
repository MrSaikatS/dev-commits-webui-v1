import { Button } from "@nextui-org/button";
import { FileDigit, Heading2 } from "lucide-react";
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
          isIconOnly
          size="lg"
          color="primary"
          variant="shadow"
          className="h-14 w-14 sm:hidden"
          onPress={onOpen}
        >
          <Heading2 size={28} />
        </Button>

        <Button
          size="lg"
          color="primary"
          variant="shadow"
          className="hidden h-14 sm:flex"
          startContent={<FileDigit size={28} />}
          onPress={onOpen}
        >
          Create Post
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

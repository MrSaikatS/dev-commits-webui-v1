import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@nextui-org/modal";

const EditProfileModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <div className="">
        <Button
          color="secondary"
          variant="ghost"
          onPress={onOpen}>
          Edit Profile
        </Button>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalBody className="p-6">
                  <div className="">do u want to chnage ur pic</div>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};

export default EditProfileModal;

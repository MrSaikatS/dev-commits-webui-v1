import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/modal";

const ProfilePicture = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const profilePhotoFn = async () => {
    console.log("dgdjbgkjdbjk");
  };

  return (
    <>
      <div className="">
        <Button
          className="sm:w-28"
          color="secondary"
          variant="ghost"
          onPress={onOpen}>
          Edit Picture
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
                    Are you sure Update This Picture?
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      radius="sm"
                      onPress={profilePhotoFn}
                      color="secondary"
                      variant="ghost"
                      fullWidth>
                      OK
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

export default ProfilePicture;

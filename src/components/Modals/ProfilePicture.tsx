import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@nextui-org/modal";
import { useState } from "react";
import { useFilePicker } from "use-file-picker";

const ProfilePicture = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [selectedImage, setSelectedImage] = useState(false);

  const { openFilePicker, filesContent, clear } = useFilePicker({
    multiple: false,
    accept: "image/*",
    readAs: "DataURL",
    onFilesSuccessfullySelected: () => {
      setSelectedImage(true);
    },
    onClear: () => {
      setSelectedImage(false);
    },
  });

  const clearImg = () => {
    clear();
  };

  const profilePhotoFn = async () => {};

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
          backdrop="blur"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          isDismissable={false}
          size="lg">
          <ModalContent>
            {(onClose) => (
              <>
                <ModalBody className="p-6">
                  <div className="text-center text-2xl font-bold">
                    Profile photo
                  </div>
                  <div className="flex flex-col items-center justify-center gap-6 p-8">
                    {filesContent.map((file, index) => (
                      <img
                        src={file.content}
                        key={index}
                        alt={file.name}
                        width={320}
                        className="aspect-square"
                      />
                    ))}
                    {!selectedImage && (
                      <Button
                        color="primary"
                        onPress={openFilePicker}>
                        Select File
                      </Button>
                    )}
                    {selectedImage && (
                      <>
                        <div className="grid grid-cols-2 gap-10">
                          <Button
                            onPress={clearImg}
                            radius="sm"
                            type="submit"
                            color="danger"
                            variant="ghost"
                            fullWidth>
                            Cancel
                          </Button>
                          <Button
                            radius="sm"
                            onPress={profilePhotoFn}
                            color="secondary"
                            variant="ghost"
                            fullWidth>
                            Upload profile
                          </Button>
                        </div>
                      </>
                    )}
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

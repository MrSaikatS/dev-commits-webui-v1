import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useFilePicker } from "use-file-picker";

const UpdateProfilePic = () => {
  const [isFile, setIsFile] = useState(false);

  // Get QueryClient from the context
  //   const queryClient = useQueryClient();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { openFilePicker, filesContent, clear } = useFilePicker({
    multiple: false,
    accept: "image/*",
    readAs: "DataURL",
    onFilesSuccessfullySelected: () => {
      setIsFile(true);
    },
    onClear: () => {
      setIsFile(false);
    },
  });

  // Main Function

  const uploadProfilepic = () => {};

  return (
    <div>
      <div className="">
        <Button size="lg" color="secondary" variant="ghost" onPress={onOpen}>
          Update Avatar
        </Button>

        <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="text-xl">
                  Update Profile Avatar
                </ModalHeader>
                <ModalBody className="mb-6 items-center gap-4">
                  {!isFile && (
                    <button onClick={openFilePicker}>
                      <Image
                        isBlurred
                        width={200}
                        height={200}
                        src="/MYSELF2.jpg"
                        radius="full"
                        className="aspect-square"
                      />
                    </button>
                  )}

                  {filesContent.map((file, index) => (
                    <div key={index}>
                      <Image
                        isBlurred
                        width={200}
                        height={200}
                        src={file.content}
                        alt={file.name}
                        radius="full"
                        className="aspect-square"
                      />
                    </div>
                  ))}

                  {isFile && (
                    <div className="flex gap-4">
                      <Button
                        size="lg"
                        color="danger"
                        variant="ghost"
                        onPress={clear}
                      >
                        Discard
                      </Button>
                      <Button
                        size="lg"
                        color="primary"
                        variant="ghost"
                        onPress={uploadProfilepic}
                      >
                        Update
                      </Button>
                    </div>
                  )}
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default UpdateProfilePic;

import { updateProfileImage } from "@/utlis/apiQueries";
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
import { toast } from "sonner";
import { useFilePicker } from "use-file-picker";

const ProfilePicUpdate = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [pickFile, setPickFile] = useState(false);

  // File Update

  const { openFilePicker, filesContent, plainFiles, clear } = useFilePicker({
    multiple: false,
    accept: "image/*",
    readAs: "DataURL",
    onFilesSuccessfullySelected: () => {
      setPickFile(true);
    },
    onClear: () => {
      setPickFile(false);
    },
  });

  // main function backend

  const imageUpload = async () => {
    const abc = await updateProfileImage(plainFiles);
    console.log(abc);
    toast.success("Profile Pic Updated.");

    queryClient.refetchQueries({ queryKey: ["getMe"] });
  };

  return (
    <>
      <div className="">
        <Button size="lg" color="warning" variant="ghost" onPress={onOpen}>
          Profile Pic Btn
        </Button>
      </div>

      {/* Modal Code  */}

      <Modal backdrop="opaque" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onclose) => (
            <>
              <ModalHeader>Profile Image Upload Section's</ModalHeader>
              <ModalBody className="items-center">
                {!pickFile && (
                  <>
                    <button onClick={openFilePicker}>
                      {id === null ? (
                        <Image
                          className="w-40 h-40 rounded-full object-cover"
                          src={
                            "https://citindia.in/wp-content/uploads/2022/03/Saikat.png.webp"
                          }
                          alt="Profile image"
                        />
                      ) : (
                        <Image
                          className="w-40 h-40 rounded-full object-cover"
                          src={`${process.env.NEXT_PUBLIC_API}/assets/${id}`}
                          alt="Profile image"
                        />
                      )}
                    </button>
                  </>
                )}
                {filesContent.map((file, index) => (
                  <div key={index}>
                    <Image
                      width={200}
                      height={200}
                      src={file.content}
                      alt={file.name}
                      radius="full"
                      className="aspect-square"
                    />
                  </div>
                ))}
              </ModalBody>
              <div className="flex flex-row gap-3 ml-5 mb-3">
                <Button onPress={imageUpload} color="primary">
                  Update Image
                </Button>
                <Button onPress={clear}>Discard</Button>
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfilePicUpdate;

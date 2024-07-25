import { Image } from "@nextui-org/image";

const LoginUserImage = () => {
  return (
    <>
      <Image
        src={
          "https://cdn.pixabay.com/photo/2024/06/21/06/16/ai-generated-8843649_1280.jpg"
        }
        width={50}
        height={50}
        radius="full"
        alt="profile_img"
        className="aspect-square p-1"
      />
    </>
  );
};

export default LoginUserImage;

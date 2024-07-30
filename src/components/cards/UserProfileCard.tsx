import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import LikeButton from "../button/LikeButton";
import { Button } from "@nextui-org/button";

const UserProfileCard = () => {
  return (
    <>
      <div>
        <div className="mt-2">
          <Card className="sm:w-[400px] w-[350px]">
            <CardHeader className="items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src={"/MYSELF2.jpg"}
                  height={60}
                  width={60}
                  radius="full"
                  className="aspect-square p-1"
                  isBlurred
                />
                <div className="text-lg">Sourav Bhattacharyya</div>
              </div>

              <LikeButton />
            </CardHeader>

            <CardBody className="space-y-6">
              <div className="grid place-items-center">
                <Image
                  src={"/mercedes.jpg"}
                  height={300}
                  width={300}
                  className="aspect-video"
                  isBlurred
                />
              </div>

              <div className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita quia, odit mollitia est deserunt possimus dolores amet
                esse, nisi laboriosam omnis. Fuga quasi obcaecati labore
                aspernatur maiores perferendis nesciunt molestiae?
              </div>
              <Button color="secondary">Delete</Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
};

export default UserProfileCard;

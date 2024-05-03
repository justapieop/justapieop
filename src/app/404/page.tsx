import { Center, Image } from "@chakra-ui/react";
import NotFoundImage from "../../assets/404.webp";

export default function NotFound(): JSX.Element {
    return (
        <Center display="flex" backgroundColor="#000001" justifyContent="center" height="100vh">
            <Image dropShadow="md" margin="auto" objectFit="scale-down" maxHeight="100%" src={NotFoundImage.src} />
        </Center>
    );
}
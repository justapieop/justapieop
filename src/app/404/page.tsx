import { Center, Image } from "@chakra-ui/react";

export default function NotFound(): JSX.Element {
    return (
        <Center display="flex" backgroundColor="#000001" justifyContent="center" height="100vh">
            <Image dropShadow="md" margin="auto" objectFit="scale-down" maxHeight="100%" src="https://s3.justapie.net/404.webp" />
        </Center>
    );
}
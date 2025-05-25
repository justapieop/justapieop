import { Box } from "@chakra-ui/react";

export function Overlay(): JSX.Element {
    return (
        <Box position="absolute" top={0} left={0} w="100%" h="100%" backgroundColor="rgba(0, 0, 0, .5)" />
    );
}
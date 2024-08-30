import { ProfileCard } from "@/components/ProfileCard";
import { Box, Flex } from "@chakra-ui/react";

export default function Home(): JSX.Element {
  return (
    <Box
      width="100%"
      height="100vh"
    >
      <Box
        backgroundColor="#070F2B"
        position="absolute"
        top="0"
        width="100%"
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <ProfileCard />
      </Box>
    </Box >
  );
}
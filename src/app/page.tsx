import { Overlay } from "@/components/Overlay";
import { ProfileCard } from "@/components/ProfileCard";
import { Video } from "@/components/Video";
import { Box } from "@chakra-ui/react";

export default function Home(): JSX.Element {
  return (
    <Box
      width="100%"
      height="100vh"
    >
      <Overlay />
      <Video />
      <Box
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
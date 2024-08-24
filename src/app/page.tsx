import { ProfileCard } from "@/components/ProfileCard";
import { UtilsBar } from "@/components/UtilsBar";
import { Box, Grid, GridItem } from "@chakra-ui/react";

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
        <Grid
          gap={5}
        >
          <GridItem>
            <UtilsBar />
          </GridItem>

          <GridItem>
            <ProfileCard />
          </GridItem>
        </Grid>
      </Box>
    </Box >
  );
}
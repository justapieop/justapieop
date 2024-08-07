import { ProfileCard } from "@/components/ProfileCard";
import { Box, Grid, GridItem } from "@chakra-ui/react";

export default function Home(): JSX.Element {
  return (
    <Box
      width="100%"
      height="100vh"
    >
      <Box
        className="scheme-1"
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
          templateColumns="repeat(2, minmax(200px, 1fr))"
        >
          <GridItem>
            <ProfileCard />
          </GridItem>

          <GridItem>

          </GridItem>
        </Grid>
      </Box>
    </Box >
  );
}
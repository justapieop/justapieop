import { Container, Card, CardHeader, Text, Avatar, Box, Flex, Button, CardFooter, Link, Image } from "@chakra-ui/react";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";

export default function Home(): JSX.Element {
  return (
    <Box width="100%" height="100vh">
      <Box position="absolute" top="0" left="0" width="100%" height="100%" backgroundColor="#000000ac" />
      <video height="100vh" width="100%" autoPlay loop muted preload="auto">
        <source src="https://s3.justapie.net/yae.webm" />
      </video>
      <Box position="absolute" top="0" width="100%" height="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start">
        <Container>
          <Card maxWidth="md" rounded="2xl" right={{ xl: "150px" }} opacity="0.85" backgroundColor="#2d2b2baa">
            <CardHeader>
              <Flex letterSpacing="4">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Avatar size="2xl" src="https://s3.justapie.net/avatar.webp" />
                  <Box>
                    <Text fontStyle="bold" paddingTop="10px" fontSize="30px">Đỗ Trần Thái An</Text>
                    <Text>💼 Student, Junior Developer</Text>
                  </Box>
                </Flex>

              </Flex>
            </CardHeader>

            <CardFooter justify="space-evenly" flexWrap="wrap">
              <Link href="https://github.com/justapieop" isExternal>
                <Button colorScheme="green" flex="1" variant="ghost" leftIcon={<FaGithub />}>
                  justapieop
                </Button>
              </Link>
              <Link href="https://discord.com/users/527652357354422272" isExternal>
                <Button colorScheme="purple" flex="1" variant="ghost" leftIcon={<FaDiscord />}>
                  justapie06
                </Button>
              </Link>
              <Link href="https://twitter.com/pieajust" isExternal>
                <Button colorScheme="twitter" flex="1" variant="ghost" leftIcon={<FaTwitter />}>
                  pieajust
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </Container>
      </Box>
    </Box >
  );
}
import { Card, CardHeader, Flex, Avatar, Box, CardFooter, Button, Link, Text, CardBody, VStack, HStack } from "@chakra-ui/react";
import { FaGithub, FaDiscord, FaTwitter } from "react-icons/fa";
import { TbMail, TbMapPin } from "react-icons/tb";

export function ProfileCard(): JSX.Element {
    return (
        <Card
            backgroundColor="#1B1A55"
        >
            <CardHeader>
                <Flex gap="4">
                    <Flex
                        flex="1"
                        gap="4"
                        alignItems="center"
                        flexWrap="wrap"
                    >
                        <Avatar name="JustAPie" src="https://s3.justapie.net/avatar.webp" />

                        <Box>
                            <Text fontWeight="bolder">Do Tran Thai An</Text>
                            <Text>Student, Junior Developer</Text>
                        </Box>
                    </Flex>
                </Flex>
            </CardHeader>

            <CardBody>
                <Flex
                    paddingLeft="15px"
                    flex="1"
                    gap="4"
                    alignItems="center"
                    flexWrap="wrap"
                >
                    <Flex columnGap="10px">
                        <TbMapPin color="white" size="20" />
                        <Text>Vietnam</Text>
                    </Flex>
                    <Flex columnGap="10px">
                        <TbMail color="white" size="20" />
                        <Text>work@justapie.net</Text>
                    </Flex>
                </Flex>
            </CardBody>


            <CardFooter
                justify="space-evenly"
                margin="left"
                flexWrap="wrap"
                gap="4"
            >
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
    );
}
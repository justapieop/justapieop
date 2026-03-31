import { useColorModeValue } from "@/components/ui/color-mode";
import { resolveLink } from "@/utils";
import {
  Box,
  Card,
  Avatar,
  Text,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaGithub, FaDiscord, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import type { JSX } from "react";

export default function Home(): JSX.Element {
  const [copied, setCopied] = useState(false);

  function copyDiscord() {
    navigator.clipboard.writeText("justapie06");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Flex
      minH="100dvh"
      bg={useColorModeValue("gray.100", "gray.900")}
      align="center"
      justify="center"
      px={{ base: 4, sm: 6, md: 8 }}
      py={{ base: 6, md: 8 }}
    >
      <Card.Root
        w="full"
        maxW={{ base: "full", sm: "sm", md: "md" }}
      >
        <Card.Header px={{ base: 4, sm: 5, md: 6 }} py={{ base: 3, sm: 4 }}>
          <HStack gap={{ base: 2, sm: 3, md: 4 }} align="center">
            <Avatar.Root size={{ base: "sm", sm: "md", md: "lg" }}>
              <Avatar.Fallback name="JustAPie" />
              <Avatar.Image src={resolveLink("avatar.png")} />
            </Avatar.Root>
            <Box>
              <Text fontSize={{ base: "md", sm: "lg", md: "xl" }} fontWeight="semibold">
                Do Tran Thai An
              </Text>
              <Text fontSize={{ base: "xs", sm: "sm" }} color={useColorModeValue("gray.500", "gray.400")}>
                Software developer
              </Text>
            </Box>
          </HStack>
        </Card.Header>
        <Card.Body px={{ base: 4, sm: 5, md: 6 }} pt={0} pb={{ base: 3, sm: 4 }}>
          <HStack gap={4} align="center" flexWrap="wrap">
            <a
              href="mailto:work@justapie.net"
              style={{ textDecoration: "none", display: "inline-flex", alignItems: "center" }}
            >
              <HStack gap={2} align="center" cursor="pointer" color={useColorModeValue("gray.500", "gray.400")} _hover={{ color: useColorModeValue("gray.700", "gray.200") }} transition="color 0.2s">
                <MdEmail size={18} />
                <Text fontSize="md">work@justapie.net</Text>
              </HStack>
            </a>
            <a
              href="tel:+84819533619"
              style={{ textDecoration: "none", display: "inline-flex", alignItems: "center" }}
            >
              <HStack gap={2} align="center" cursor="pointer" color={useColorModeValue("gray.500", "gray.400")} _hover={{ color: useColorModeValue("gray.700", "gray.200") }} transition="color 0.2s">
                <MdPhone size={18} />
                <Text fontSize="md">+84 819 533 619</Text>
              </HStack>
            </a>
          </HStack>
        </Card.Body>
        <Card.Footer px={{ base: 4, sm: 5, md: 6 }} pt={0} pb={{ base: 3, sm: 4 }}>
          <HStack gap={4} align="center" flexWrap="wrap">
            <a
              href="https://github.com/justapieop"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", display: "inline-flex", alignItems: "center" }}
            >
              <HStack gap={2} align="center" cursor="pointer" color={useColorModeValue("gray.500", "gray.400")} _hover={{ color: useColorModeValue("gray.700", "gray.200") }} transition="color 0.2s">
                <FaGithub size={18} />
                <Text fontSize="md">justapieop</Text>
              </HStack>
            </a>
            <a
              href="https://www.linkedin.com/in/justapie/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", display: "inline-flex", alignItems: "center" }}
            >
              <HStack gap={2} align="center" cursor="pointer" color={useColorModeValue("gray.500", "gray.400")} _hover={{ color: useColorModeValue("gray.700", "gray.200") }} transition="color 0.2s">
                <FaLinkedin size={18} />
                <Text fontSize="md">justapie</Text>
              </HStack>
            </a>
            <HStack
              gap={2}
              align="center"
              cursor="pointer"
              color={copied ? useColorModeValue("green.500", "green.300") : useColorModeValue("gray.500", "gray.400")}
              _hover={{ color: copied ? undefined : useColorModeValue("gray.700", "gray.200") }}
              transition="color 0.2s"
              onClick={copyDiscord}
              userSelect="none"
            >
              <FaDiscord size={18} />
              <Text fontSize="md">{copied ? "Copied!" : "justapie06"}</Text>
            </HStack>
          </HStack>
        </Card.Footer>
      </Card.Root>
    </Flex>
  );
}

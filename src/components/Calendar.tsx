import { Text } from "@chakra-ui/react";

export function Calendar(): JSX.Element {
    const date: Date = new Date();

    return (
        <Text>
            {date.getDay()}/{date.getMonth()}/{date.getFullYear()}
        </Text>
    );
}
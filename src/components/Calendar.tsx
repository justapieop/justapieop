import { Utils } from "@/utils/Utils";
import { Text } from "@chakra-ui/react";

export function Calendar(): JSX.Element {
    const date: Date = new Date();

    return (
        <Text>
            {Utils.doubleDigitFormatter(date.getDay())}/{Utils.doubleDigitFormatter(date.getMonth())}/{Utils.doubleDigitFormatter(date.getFullYear())}
        </Text>
    );
}
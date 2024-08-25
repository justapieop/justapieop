import { Card, CardFooter, Flex } from "@chakra-ui/react";
import { TbClock, TbCalendar } from "react-icons/tb";
import { TextClock } from "./TextClock";
import { Calendar } from "./Calendar";

export function UtilsBar(): JSX.Element {
    return (
        <Card
            backgroundColor="#1B1A55"
        >
            <CardFooter>
                <Flex gap="4" paddingLeft="15px">
                    <Flex columnGap="10px">
                        <TbCalendar color="white" size="20" />
                        <Calendar />
                    </Flex>

                    <Flex columnGap="10px">
                        <TbClock color="white" size="20" />
                        <TextClock />
                    </Flex>
                </Flex>
            </CardFooter>
        </Card >
    );
}
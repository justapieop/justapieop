"use client";

import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export function TextClock(): JSX.Element {
    const date: Date = new Date();

    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const timeString: string =
            `${Intl.DateTimeFormat().resolvedOptions().timeZone} ${doubleDigitFormatter(date.getHours())}:${doubleDigitFormatter(date.getMinutes())}:${doubleDigitFormatter(date.getSeconds())}`;

        const timer: NodeJS.Timeout = setInterval(() => {
            setCurrentTime(timeString);
        }, 1000);

        return () => clearInterval(timer);
    }, [currentTime]);

    return (
        <Text>
            {currentTime.length === 0 ? "Loading..." : currentTime}
        </Text>
    );
}

function doubleDigitFormatter(s: number): string {
    const numberStr: string = String(s);

    return numberStr.length === 2 ? numberStr : "0" + numberStr;
}
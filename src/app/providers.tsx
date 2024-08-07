"use client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme: Record<string, any> = extendTheme({
    components: {
        Text: {
            baseStyle: {
                color: "white"
            }
        },
        Card: {
            baseStyle: {
                color: "white"
            }
        }
    }
});

export function Providers({ children }: { children: React.ReactNode }): JSX.Element {
    return (<ChakraProvider theme={theme}>{children}</ChakraProvider>);
}
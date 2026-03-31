"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import theme from "../../theme";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

  return (
    <ChakraProvider theme={theme} value={defaultSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}

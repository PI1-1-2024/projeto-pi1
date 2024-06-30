import { Box, Heading, Highlight, Image, Text } from "@chakra-ui/react";
import a from "../../../public/images/carroGrupo.png";
import b from "../../../public/images/carGrupo.png";

export function LandPage() {
  return (
    <>
      <Box position="relative" display="flex">
        <Heading
          size="4xl"
          w="70%"
          align="center"
          position="absolute"
          top="50%"
        >
          <Highlight
            query="Ovo"
            styles={{
              px: 6,
              py: 1,
              rounded: "full",
              borderRightRadius: 0,
              bg: "yellow.500",
              color: "white",
            }}
            mr={2}
          >
            Ovo
          </Highlight>
          <Highlight
            query="Tranquilão"
            styles={{
              px: 6,
              py: 1,
              rounded: "full",
              borderLeftRadius: 0,
              bg: "yellow.200",
              color: "yellow.500",
            }}
          >
            Tranquilão
          </Highlight>
        </Heading>
        <Image objectFit="cover" height="100vh" src={a} overflow="hidden" />
        <Image objectFit="cover" height="100%" src={b} overflow="hidden" />
      </Box>
    </>
  );
}

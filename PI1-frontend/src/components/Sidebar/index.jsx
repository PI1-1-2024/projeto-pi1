import { HStack, Highlight, Heading } from "@chakra-ui/react";

export function Navbar() {
  return (
    <HStack width="100%" height="48px" justify="space-between">
      <Heading>
        <Highlight
          query={"Ovo"}
          styles={{
            bg: "yellow.400",
            px: 4,
            py: 2,
            rounded: "full",
            color: "whiteAlpha.900",
          }}
        >
          Ovo McQueen
        </Highlight>
      </Heading>
    </HStack>
  );
}

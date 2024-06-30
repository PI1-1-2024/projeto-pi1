import { IconButton, Image, HStack, Link, Spacer } from "@chakra-ui/react";
import unb from "/images/img.png";
import { FaGithub } from "react-icons/fa6";

export function Footer() {
  return (
    <HStack
      w="full"
      bg="yellow.400"
      justifyContent="center"
      px="100px"
      position="absolute"
      bottom={0}
    >
      <Image objectFit="cover" src={unb} h="50px" />
      <Spacer />
      <IconButton aria-label="Github" variant="none" icon={<FaGithub />} />
      <IconButton aria-label="Github" variant="none" icon={<FaGithub />} />
      <IconButton aria-label="Github" variant="none" icon={<FaGithub />} />
      <Spacer />
      <Link>Sobre nós</Link>
    </HStack>
  );
}

import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Bluetooth from "../../bluetooth";

import image1 from "/images/card1.jpeg";
import image2 from "/images/card2.jpeg";
import image3 from "/images/card3.jpeg";
import imagebg from "/images/OvoSkate.jpeg";

export function ListRuns() {
  const navigator = useNavigate();
  const toast = useToast();

  const goTo = () => {
    const bluetooth = Bluetooth;
    if (bluetooth.isWebBluetoothEnabled()) {
      navigator("./new");
      return;
    }
    toast({
      status: "error",
      title: "Bluetooth indisponível.",
      description: "O seu navegador não possui suporte para conexão bluetooth.",
      position: "top-right",
    });
  };

  return (
    <Center h="full" w="70vw" my="auto" flexDir="column" pl={4}>
      <Box
        display="flex"
        flexDir="column"
        w="100%"
        boxShadow="md"
        p={2}
        borderRadius="lg"
      >
        <HStack justifyContent="space-between" w="full" pr={14}>
          <Heading>Trajetos</Heading>
          <Button onClick={goTo} variant="outline" colorScheme="yellow">
            Novo percurso
          </Button>
        </HStack>
        <Image
          position="fixed"
          src={imagebg}
          right={0}
          height="70vh"
          zIndex={-1}
        />
        <SimpleGrid
          justifyContent="center"
          borderRadius="md"
          minChildWidth={"256px"}
          w="100%"
        >
          <RunCard image={image1} name="Percurso 1" />
          <RunCard image={image2} name="Percurso 2" />
          <RunCard image={image3} name="Percurso 3" />
          <RunCard image={image3} name="Percurso 3" />
          <RunCard image={image3} name="Percurso 3" />
        </SimpleGrid>
      </Box>
    </Center>
  );
}

function RunCard({ name, image }) {
  return (
    <Card _hover={{ cursor: "pointer" }} w="full" px={2} py={3}>
      <Image src={image} objectFit="cover" borderRadius="md" h="138px" />
      <CardBody py={1}>
        <Heading size="md">{name}</Heading>
      </CardBody>
      <CardFooter justifyContent="flex-end" py={1}>
        <Button colorScheme="yellow">Ver dados</Button>
      </CardFooter>
    </Card>
  );
}

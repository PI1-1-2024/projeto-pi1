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
  Skeleton,
  Tag,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Bluetooth from "../../bluetooth";

import image1 from "/images/card1.jpeg";
import image2 from "/images/card2.jpeg";
import image3 from "/images/card3.jpeg";
import imagebg from "/images/OvoSkate.jpeg";
import { Service } from "../../services/api";
import { useQuery } from "@tanstack/react-query";

const images = [image1, image2, image3];

export function ListRuns() {
  const navigator = useNavigate();
  const toast = useToast();

  const { isPending, data } = useQuery({
    queryKey: ["percursos"],
    queryFn: Service.getAllPercursos,
  });

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
        <Skeleton isLoaded={!isPending}>
          <SimpleGrid
            justifyContent="flex-start"
            borderRadius="md"
            minChildWidth={"256px"}
            maxChildWidth={"256px"}
          >
            {data?.map((percurso, index) => (
              <RunCard
                key={`TaskCard${percurso.id}`}
                image={images[index % images.length]}
                {...percurso}
              />
            ))}
          </SimpleGrid>
        </Skeleton>
      </Box>
    </Center>
  );
}

function RunCard({ id, image, velocidade, tempo, aceleracao }) {
  return (
    <Card w="full" maxW="358px" px={2} py={3}>
      <Image src={image} objectFit="cover" borderRadius="md" h="138px" />
      <CardBody py={1}>
        <Heading size="md">{`Percurso ${id}`}</Heading>
        <HStack mt={1} justifyContent="flex-end" w="full">
          <Tooltip label="Velocidade média">
            <Tag colorScheme="yellow">{`${velocidade}m/s`}</Tag>
          </Tooltip>
          <Tooltip label="Aceleração média">
            <Tag colorScheme="yellow">{`${aceleracao}m/s²`}</Tag>
          </Tooltip>
          <Tooltip label="Tempo total">
            <Tag colorScheme="yellow">{`${tempo}s`}</Tag>
          </Tooltip>
        </HStack>
      </CardBody>
      <CardFooter justifyContent="flex-end" py={1}>
        <Button colorScheme="yellow">Ver dados</Button>
      </CardFooter>
    </Card>
  );
}

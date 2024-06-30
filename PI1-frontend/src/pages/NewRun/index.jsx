import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Icon,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { FaBluetooth } from "react-icons/fa6";
import { useCanvas } from "../../hooks/useCanvas";
import Bluetooth from "../../bluetooth";
import { useEffect } from "react";
import { degreesToRadians } from "../../utils";
import { useChart } from "../../hooks/useChart";
import { Line, Scatter } from "react-chartjs-2";

import poltrona from "/images/OvoPoltrona.jpeg";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export function NewRun() {
  const disclosure = useDisclosure({ defaultIsOpen: true });

  const bluetooth = new Bluetooth();
  const { chartRef, updateChart } = useChart();
  const { canvasRef, updatePosition } = useCanvas();

  useEffect(() => {
    bluetooth.setNotifyCarCallback((direction, velocity) => {
      updatePosition(velocity, degreesToRadians(direction));
      //draw();
      //updateScatter();
      updateChart(100, velocity);
    });
  }, []);

  const startConnection = async () => {
    await bluetooth.connectToDevice().then(disclosure.onClose);
  };

  return (
    <Box position="relative" w="100%">
      <Center flexDir="column">
        <Modal {...disclosure}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <HStack justifyContent="center">
                <Icon as={FaBluetooth} fontSize="2rem" color="blue.800" />
                <Text>Preparação</Text>
              </HStack>
            </ModalHeader>
            <ModalBody>
              <Center>
                <VStack>
                  <Text align="center">
                    Posicione o carrinho no percurso, e então inicie a conexão
                    bluetooth para iniciar o percusso
                  </Text>
                  <Button onClick={startConnection} colorScheme="blue">
                    Clique para iniciar conexão bluetooth
                  </Button>
                </VStack>
              </Center>
            </ModalBody>
          </ModalContent>
        </Modal>
        <VStack>
          <Heading>Percurso</Heading>
        </VStack>
        <Tabs w="80%">
          <TabList>
            <Tab>Percurso</Tab>
            <Tab>Velocidade</Tab>
            <Tab>Aceleração</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Center w="100%" h="70vh">
                <Scatter
                  ref={canvasRef}
                  options={{
                    plugins: {
                      tooltip: { enabled: false },
                    },
                    elements: {
                      line: {
                        tension: 0.8,
                      },
                    },
                    showLine: true,
                  }}
                  data={{
                    datasets: [
                      {
                        label: "Label",
                        data: [{ x: 0, y: 0 }],
                      },
                    ],
                  }}
                />
              </Center>
            </TabPanel>
            <TabPanel>
              <Center w="100%" h="70vh">
                <Line
                  ref={chartRef}
                  options={{
                    responsive: true,
                    scales: {
                      x: { display: false },
                    },
                    plugins: {
                      legend: {
                        display: true,
                        position: "top",
                      },
                    },
                  }}
                  data={{
                    labels: [],
                    datasets: [
                      {
                        label: "Velocidade",
                        data: [],
                      },
                    ],
                  }}
                />
              </Center>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Image
          src={poltrona}
          objectFit="cover"
          position="absolute"
          bottom={0}
          right={0}
          h="35%"
        />
      </Center>
    </Box>
  );
}

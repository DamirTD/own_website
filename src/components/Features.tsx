import { ReactNode, useState } from 'react';
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}>
      {children}
    </Box>
  );
}

type Service = {
  name: string;
  price: string;
  features: string[];
};

export default function ThreeTierPricing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, 
  });
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const openModal = (service: Service) => {
    setSelectedService(service);
    setIsOpen(true);
  }

  const closeModal = () => {
    setSelectedService(null);
    setIsOpen(false);
  }

  const services = [
    {
      name: 'Создание/Дизайн Веб-сайта',
      price: '50 000',
      features: ['Консультация','Дизайн сайта', 'Разработка сайта', 'Тестирование сайта', 'Запуск на хостинг'],
    },
    {
      name: 'Разработка чат-ботов',
      price: '20 000',
      features: [
        'Дизайн бота',
        'Разработка бота',
        'Тестирование бота',
        'Легкая накрутка',
        'Запуск на хостинг',
      ],
    },
    {
      name: 'Автоматизация процессов',
      price: '35 000',
      features: ['Консультация', 'Разработка', 'Тестирование', 'Правки', 'Автоматизация'],
    },
  ];

  return (
    <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
        >
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          Услуги которые мы предоставляем
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>
          Это частные услуги которые мы предоставляем.
          <br />
          Мы также можем обсудить конкретные ваши потребности.
          <br />
          *Важно понимать, что цена может варьироваться в зависимости от сложности проекта*
        </Text>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        {services.map((service, index) => (
          <PriceWrapper key={index}>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                {service.name}
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  ₸
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  {service.price}
                </Text>
              </HStack>
            </Box>
            <VStack
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}>
              <List spacing={3} textAlign="start" px={12}>
                {service.features.map((feature, index) => (
                  <ListItem key={index}>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    {feature}
                  </ListItem>
                ))}
              </List>
              <Box w="80%" pt={7}>
                <Button
                  w="full"
                  colorScheme="red"
                  variant="outline"
                  onClick={() => openModal(service)}
                >
                  Заказать
                </Button>
              </Box>
            </VStack>
          </PriceWrapper>
        ))}
      </Stack>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedService ? selectedService.name : "Service Name Not Available"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Text fontSize="lg" color={'gray.600'}>
          Мы также можем обсудить конкретные ваши потребности. <br/>
          Важно понимать, что цена может варироваться в зависимости от сложности проекта. <br/>
          Надеемся на хорошее сотрудничество.
          </Text>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={closeModal}>
              Закрыть
            </Button>
            <Button colorScheme="red"
            as="a" // Используем обычную ссылку для WhatsApp
            href="https://wa.me/77475827954/?text=Здравствуйте!%20Пишу%20с%20сайта%20tori.kz,%20хотел%20бы%20сделать%20заказ." // Ссылка на WhatsApp
            >Заказать</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
    </motion.div>
  );
}

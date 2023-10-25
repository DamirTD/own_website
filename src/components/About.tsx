import { useState } from 'react';
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Button,
  Box,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import prog1 from '../assets/prog1.jpg';
import MoreFeatures from './MoreFeatures';

export default function About() {
  const [showClientInfo1, setShowClientInfo1] = useState(false);
  const [showClientInfo2, setShowClientInfo2] = useState(false);

  const toggleClientInfo1 = () => {
    setShowClientInfo1(!showClientInfo1);
  };

  const toggleClientInfo2 = () => {
    setShowClientInfo2(!showClientInfo2);
  };

  const [ref, inView] = useInView({
    triggerOnce: true, // Запустить анимацию только один раз
    threshold: 0.2, // Измените порог по вашему усмотрению
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 1.5 }}
    >
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            О нас
          </Text>
          <Heading>Начинающая IT компания</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            Tori.kz — мы готовых создать для вас сайты, разработать чат-ботов, настроить таргетированную рекламу и автоматизировать бизнес-процессы. Мы делаем ваше онлайн-присутствие простым и эффективным.
          </Text>
          <Button onClick={toggleClientInfo1}>
            {showClientInfo1 ? 'Скрыть информацию о клиенте' : 'Показать информацию о клиенте'}
          </Button>
          {showClientInfo1 && (
            <Box>
              <Heading mt={4} fontSize="xl">
                Albera.kz
              </Heading>
              <Text mt={2}>
                Сделали дизайн сайта и разработали его. Так-же помогли автоматизировать некоторые процессы.
              </Text>
            </Box>
          )}
          <Button onClick={toggleClientInfo2}>
            {showClientInfo2 ? 'Скрыть информацию о клиенте' : 'Показать информацию о клиенте'}
          </Button>
          {showClientInfo2 && (
            <Box>
              <Heading mt={4} fontSize="xl">
                Здесь могла бы находиться ваша компания
              </Heading>
              <Text mt={2}>
                В связи с ростом количества просмотров нашего сайта, мы предоставляем возможность опубликовать услуги наших партнеров.
              </Text>
            </Box>
          )}
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={prog1}
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
      <MoreFeatures />
    </Container>
    </motion.div>
  );
}

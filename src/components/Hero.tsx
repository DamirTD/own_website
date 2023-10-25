import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconProps,
  useColorModeValue,
  useMediaQuery, // Добавляем useMediaQuery
} from '@chakra-ui/react';
import TypingText from './TypeText';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import hero1 from './../assets/hero1.jpg';
import { Link } from 'react-router-dom';
import ThreeTierPricing from './Features';
import About from './About';

const Blob = (props: IconProps) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};

const HeroSection = () => {
  const [isLargerThanTablet] = useMediaQuery('(min-width: 768px)'); // Проверка размера экрана

  const [ref, inView] = useInView({
    triggerOnce: true, // Запустить анимацию только один раз
    threshold: 0.2, // Измените порог по вашему усмотрению
  });

  return (
    <>
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 1.5 }}
    >
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
            display="flex"
            alignItems="center">
            <Text>В</Text>
            <TypingText
              text='аш успех,'
              as={'span'}
              position={'relative'}
              _after={{
                content: "",
                width: 'full',
                height: '10%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'red.400',
                zIndex: -1,
              }}
            />
          </Heading>
          <Text ml="7em" fontSize="4xl" as={'span'} color={'red.400'}>
            через наши услуги!
          </Text>
          <Text color={'gray.500'}>
            Дайте вашему бизнесу шанс процветать в цифровой эпохе!
            Мы предоставляем качественные услуги в сфере IT и бизнеса.
            Поможем выйти вам на новый уровень, сделаем всё качественно и в сроки.
          </Text>
          <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
          <Button
          as="a" // Используем обычную ссылку для WhatsApp
          href="https://wa.me/77475827954/?text=Здравствуйте!%20Пишу%20с%20сайта%20tori.kz,%20хотел%20бы%20сделать%20заказ." // Ссылка на WhatsApp
          rounded={'full'}
          size={'lg'}
          fontWeight={'normal'}
          colorScheme={'red'}
          px={6}>
          Получить консультацию
        </Button>
          <Button
          as={Link} // Используем Link из react-router-dom
          to="/services" // Перенаправляем на страницу с услугами
          rounded={'full'}
          size={'lg'}
          fontWeight={'normal'}
          px={6}>
          Узнать больше
        </Button>

          </Stack>
        </Stack>
        {isLargerThanTablet && ( // Проверяем, больше ли экран, чем планшет
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Blob
              w={'150%'}
              h={'150%'}
              position={'absolute'}
              top={'-20%'}
              left={0}
              zIndex={-1}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              color={useColorModeValue('red.50', 'red.400')}
            />
            <Box
              position={'relative'}
              height={'300px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}>
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={hero1}
              />
            </Box>
          </Flex>
        )}
      </Stack>
    </Container>
    </motion.div>
    <ThreeTierPricing />
    <About />
    </>
    
  );
}

export default HeroSection;

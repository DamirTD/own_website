import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const MoreFeatures = () => {
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
          <Box
            bg="white"
            boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
            w="100%"       
            mt={"10rem"}
            py={6}
            px={4}
            color="#252525"
          >
            <Box textAlign={"center"} maxW="2xl" mx="auto">
              <Heading as="h1" size="xl" mb={4}>
                Бесплатная консультация
              </Heading>
              <Text fontSize="lg" mb={6}>
                Для того чтобы получить бесплатную консультацию, нажмите на кнопку ниже.
              </Text>
              <Button 
              as="a" // Используем обычную ссылку для WhatsApp
              href="https://wa.me/77475827954/?text=Здравствуйте!%20Пишу%20с%20сайта%20tori.kz,%20хотел%20бы%20сделать%20заказ." // Ссылка на WhatsApp
              colorScheme="teal">
                Получить
              </Button>
            </Box>
          </Box>
        </motion.div>
      );
    };

export default MoreFeatures;

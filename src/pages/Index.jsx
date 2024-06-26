import { Container, VStack, Heading, Text, Button, Box, Image, Flex } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaSms } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Cholera Outbreak Awareness Campaign
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Join us in spreading awareness about the cholera outbreak in Lagos State. Your participation can save lives.
        </Text>
        <Box>
          <Image src="/images/cholera-awareness.jpg" alt="Cholera Awareness" borderRadius="md" />
        </Box>
        <Flex justify="center" wrap="wrap" gap={4}>
          <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
            Share on Facebook
          </Button>
          <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
            Share on Twitter
          </Button>
          <Button colorScheme="pink" leftIcon={<FaInstagram />}>
            Share on Instagram
          </Button>
          <Button colorScheme="teal" leftIcon={<FaSms />}>
            Send SMS
          </Button>
        </Flex>
        <Box bg="gray.100" p={6} borderRadius="md">
          <Heading as="h2" size="lg" mb={4}>
            How You Can Help
          </Heading>
          <Text fontSize="md" mb={2}>
            1. Share information about the outbreak on social media.
          </Text>
          <Text fontSize="md" mb={2}>
            2. Educate your community about the symptoms and prevention methods.
          </Text>
          <Text fontSize="md" mb={2}>
            3. Encourage people to seek medical help if they experience symptoms.
          </Text>
          <Text fontSize="md">
            4. Donate to organizations working to combat the outbreak.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
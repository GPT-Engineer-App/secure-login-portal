import { Container, Text, VStack, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to Our Website</Text>
        <Text>Log in to access hidden information.</Text>
        <Button as={RouterLink} to="/login" colorScheme="teal">
          Log In
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
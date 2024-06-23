import React from "react";
import { Container, Text, VStack } from "@chakra-ui/react";

const HiddenInfo = () => {
  return (
    <Container centerContent>
      <VStack spacing={4} mt={10}>
        <Text fontSize="2xl">Hidden Information</Text>
        <Text>This information is only accessible to logged-in users.</Text>
      </VStack>
    </Container>
  );
};

export default HiddenInfo;
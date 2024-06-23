import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { Container, VStack, Input, Button, Text, Alert, AlertIcon } from "@chakra-ui/react";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
      navigate("/hidden-info");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <Container centerContent>
      <VStack spacing={4} mt={10}>
        <Text fontSize="2xl">Log In</Text>
        {error && (
          <Alert status="error">
            <AlertIcon />
            {error}
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <Input type="email" placeholder="Email" ref={emailRef} required />
            <Input type="password" placeholder="Password" ref={passwordRef} required />
            <Button type="submit" isLoading={loading} colorScheme="teal">
              Log In
            </Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
};

export default Login;
import { Box, FormControl, FormLabel, Input, Button, VStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const LoginPage = () => {
  return (
    <Box p={4}>
      <VStack spacing={4}>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <Button colorScheme="blue" w="full" mt={4}>
          Log In
        </Button>
        <Button colorScheme="teal" w="full" mt={4}>
          Log In with SSO
        </Button>
        <Link as={RouterLink} to="/signup" color="teal.500" mt={2}>
          Don't have an account? Sign up
        </Link>
      </VStack>
    </Box>
  );
};

export default LoginPage;

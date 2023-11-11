import React, { useState } from 'react';
import { Heading, VStack } from '@gluestack-ui/themed';
import UserForm from '../molecules/UserForm';
import AuthService from '../../services/AuthService';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <VStack flex={1}>
      <Heading size="3xl" textAlign="center" my={30}>
        Log in
      </Heading>
      <VStack my={20}>
        <UserForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          onSubmitCallback={() => AuthService.login(email, password)}
          buttonText="Log in"
        />
      </VStack>
    </VStack>
  );
};

export default LoginScreen;

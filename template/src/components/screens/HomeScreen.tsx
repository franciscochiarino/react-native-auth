import React from 'react';
import {
  VStack,
  Heading,
  Button,
  ButtonText,
  View,
} from '@gluestack-ui/themed';
import AuthService from '../../services/AuthService';

const HomeScreen = () => {
  return (
    <VStack flex={1}>
      <Heading size="3xl" textAlign="center" my={30}>
        HomeScreen
      </Heading>
      <Heading size="xl" textAlign="center" my={30}>
        Hello Friend...
      </Heading>
      <View flex={1} alignSelf="center">
        <Button size="md" onPress={AuthService.logout}>
          <ButtonText>Log out</ButtonText>
        </Button>
      </View>
    </VStack>
  );
};

export default HomeScreen;

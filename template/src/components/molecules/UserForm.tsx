import React from 'react';
import {
  Input,
  InputField,
  VStack,
  Button,
  ButtonText,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from '@gluestack-ui/themed';
import { GestureResponderEvent } from 'react-native';

type UserFormProps = {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  onSubmitCallback: (event: GestureResponderEvent) => void;
  buttonText: string;
};

const UserForm = ({
  email,
  setEmail,
  password,
  setPassword,
  onSubmitCallback,
  buttonText,
}: UserFormProps) => {
  return (
    <VStack justifyContent="center" mx={20}>
      <FormControl>
        <FormControlLabel>
          <FormControlLabelText>Email</FormControlLabelText>
        </FormControlLabel>
        <Input mt={5} mb={30}>
          <InputField
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
        </Input>

        <FormControlLabel>
          <FormControlLabelText>Password</FormControlLabelText>
        </FormControlLabel>
        <Input mt={5} mb={30}>
          <InputField
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
          />
        </Input>

        <Button my={20} onPress={onSubmitCallback}>
          <ButtonText>{buttonText}</ButtonText>
        </Button>
      </FormControl>
    </VStack>
  );
};

export default UserForm;

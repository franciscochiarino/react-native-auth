import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useAuth from '../hooks/useAuth';

import HomeScreen from '../components/screens/HomeScreen';
import SignupScreen from '../components/screens/SignupScreen';
import LoginScreen from '../components/screens/LoginScreen';
import SplashScreen from '../components/screens/SplashScreen';

const Stack = createNativeStackNavigator();

const Router = () => {
  const [user] = useAuth();

  if (user === null) return <SplashScreen />;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        <>
          {user ? (
            <Stack.Screen name="Home" component={HomeScreen} />
          ) : (
            <>
              <Stack.Screen name="Signup" component={SignupScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
            </>
          )}
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {TouchableOpacity,ActivityIndicator} from 'react-native';
import Home from '../screens/Home';
import ProductDetails from '../screens/ProductDetails';
import CreateProduct from '../screens/CreateProduct';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#F4F6F9',
    border: 'transparent',
  },
};


export default function RootNavigator() {

  return (
    <NavigationContainer
      theme={theme}
      fallback={<ActivityIndicator />}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown: false}}
              />
            <Stack.Screen
              name="ProductDetails"
              component={ProductDetails}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="CreateProduct"
              component={CreateProduct}
              options={{headerShown: false}}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

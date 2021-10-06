/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from './src/screens/Welcome';
import SignUp from './src/screens/SignUp';
import Signin from './src/screens/SignIn';
import Home from './src/screens/Home';
import Detail from './src/screens/Detail';
import {GoBack} from './src/components/headers';
import Profile from './src/screens/Profile';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="welcome"
          component={Welcome}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="signUp"
          component={SignUp}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="signIn"
          component={Signin}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="home"
          component={Home}
        />
        <Stack.Screen
          options={{headerTransparent: true, header: GoBack}}
          name="detail"
          component={Detail}
        />
        <Stack.Screen
          options={{headerTransparent: true, header: GoBack}}
          name="profile"
          component={Profile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
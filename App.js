import React from 'react';
import HomeScreen from './screens/HomeScreen';
import Politics from './screens/Politics';
import Business from './screens/Business';
import Sports from './screens/Sports';
import WebViewScreen from './screens/WebViewScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

export default function App() {
  return (
    
      <NavigationContainer>
        <Stack.Navigator headerMode='none'>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="politics" component={Politics}/>
        <Stack.Screen name="business" component={Business}/>
        <Stack.Screen name="sports" component={Sports}/>
        <Stack.Screen name="webview" component={WebViewScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    
  );
}


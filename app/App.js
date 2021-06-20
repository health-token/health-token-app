import React from 'react'
import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { withWalletConnect } from '@walletconnect/react-native-dapp'
import HomeScreen from 'screens/HomeScreen'
import Dashboard from 'screens/Dashboard'
import ChartScreen from 'screens/ChartScreen'
import SocialsScreen from 'screens/SocialsScreen'

const Stack = createStackNavigator()

const Theme = {
  ...DefaultTheme,
  colors: {...DefaultTheme.colors, background: '#FFFFFF'}
}

function App() {
  return (
    <NavigationContainer theme={Theme}>
      <Stack.Navigator>
        {/*
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChartScreen"
          component={ChartScreen}
          options={{headerShown: false}}
        />
        */}
        <Stack.Screen
          name="SocialsScreen"
          component={SocialsScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default withWalletConnect(App, {
	redirectUrl: Platform.OS === 'web' ? window.location.origin : 'yourappscheme://',
		storageOptions: {
			asyncStorage: AsyncStorage,
		}
})


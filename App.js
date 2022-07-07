import Main from './src/components/Main';
import React from 'react';
import { View, Text , Button} from 'react-native';
import ReposistoryList from './src/components/RepositoryList';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import theme from './src/theme';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogInPage from './src/pages/Login';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from './src/utils/apolloClient';

const Stack = createNativeStackNavigator();

const apolloClient = createApolloClient()

export default function App() {
  console.log("Hola")
  /*To change the status bar */
  return (
    <>
    <ApolloProvider client={apolloClient}>

    
    <StatusBar style='light'/>
    <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" screenOptions={{headerStyle:{backgroundColor: theme.appBar.primary}, headerTintColor: theme.appBar.textPrimary}}>
              <Stack.Screen name="Home" options={{title: 'Warapo'}} component={ReposistoryList} />
              <Stack.Screen name="LogIn" component={LogInPage} />
            </Stack.Navigator>
            
        </NavigationContainer>

    </ApolloProvider>
    </>
  )
}


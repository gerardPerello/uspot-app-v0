import Main from './src/components/Main';
import React from 'react';
import { View, Text , Button} from 'react-native';
import ReposistoryList from './src/components/RepositoryList';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import theme from './src/theme';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function DetailsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>DetailsScreen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default function App() {
  console.log("Hola")
  return (
    <>
    <StatusBar style='light'/>
    <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" screenOptions={{headerStyle:{backgroundColor: theme.appBar.primary}, headerTintColor: theme.appBar.textPrimary}}>
              <Stack.Screen name="Home" options={{title: 'Warapo'}} component={ReposistoryList} />
              <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
            
        </NavigationContainer>
    </>
  )
}


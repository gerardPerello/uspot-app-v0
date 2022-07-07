import React from "react";
import { Text, View, Alert, Platform} from "react-native";
import { TouchableNativeFeedback } from "react-native";
import ReposistoryList from "./RepositoryList";
import { Route, Routes} from "react-router-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AppBar = Platform.select({
  ios: () => require('./AppBar.jsx').default,
  default: () => require('./AppBar.jsx').default
})()
//Tambien se pueden hacer diferentes versiones de AppBar. Lo que hay que hacer 
//Es quitarle el .jsx a la importacion i diferenciar los ficheros como AppBar.ios.jsx
//O por ejemplo AppBar.android.jsx

const Stack = createNativeStackNavigator();

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Main = () => {


    return(
        <View style={ {flex: 1}}>
            
            <AppBar/>

            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={ReposistoryList} />
              <Stack.Screen name="Home" component={DetailsScreen} />
            </Stack.Navigator>
            
            
            
        </View>
    )
}

export default Main
import React from "react";
import { Text, View, Alert} from "react-native";
import { TouchableNativeFeedback } from "react-native";
import ReposistoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Route, Routes} from "react-router-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


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
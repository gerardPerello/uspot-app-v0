import React from "react";
import Constants from 'expo-constants'
import { Text, View, Alert} from "react-native";
import { TouchableNativeFeedback } from "react-native";
import ReposistoryList from "./RepositoryList";

const Main = () => {

    const createTwoButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

    return(
        <View style={ {marginTop: Constants.statusBarHeight, flexGrow: 1}}>
            <TouchableNativeFeedback onPress={createTwoButtonAlert}>
            <Text>Rate Repository App</Text>
            </TouchableNativeFeedback>
            <ReposistoryList/>
            
        </View>
    )
}

export default Main
import React, { useEffect, useState } from "react";
import {View, Text, FlatList, Button} from 'react-native'
import repositoriesdoomy from '../data/repositories.js'
import RepositoryItem from "./RepositoryItem.jsx";
import useRepositories from "../hooks/useRepositories.js";




const ReposistoryList = ({navigation}) => {

    const {repositories } = useRepositories()


    return (
        <View style={{flexGrow: 1}}>
            <Button
        title="Go to Login"
        onPress={() => navigation.navigate('LogIn')}
      />
      <FlatList 
        data={repositories}
        ItemSeparatorComponent={() => <Text> </Text>}
        renderItem={({ item: repo }) => (
            <RepositoryItem {...repo}/>
        )}
        />
        </View>
        
    )
}


export default ReposistoryList
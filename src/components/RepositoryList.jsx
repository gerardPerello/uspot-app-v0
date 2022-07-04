import React from "react";
import {View, Text, FlatList, Button} from 'react-native'
import repositories from '../data/repositories.js'
import RepositoryItem from "./RepositoryItem.jsx";



const ReposistoryList = ({navigation}) => {
    return (
        <View style={{flexGrow: 1}}>
            <Button
        title="Go to Detailssss"
        onPress={() => navigation.navigate('Details')}
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
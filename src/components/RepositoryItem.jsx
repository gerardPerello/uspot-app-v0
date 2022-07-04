import React from 'react'

import {View, StyleSheet,Image, Platform} from 'react-native'
import StyledText from './StyledText'
import RepositoryStats from './RespositoryStats'
import theme from '../theme'

const RepositoryItemHeader = (props) => (
    <View style={{ flexDirection: 'row', paddingBottom: 2}}>
        <View style={{ paddingRight: 10}}>
            <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }}/>
        </View>
        
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <StyledText  fontWeight='bold'>FullName: {props.fullName}</StyledText>
            <StyledText color='secondary'>{props.description}</StyledText>
            <StyledText style={styles.language}>{props.language}</StyledText>
        </View>
            
    </View>
)



const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container}>
        <RepositoryItemHeader {...props}/>
        <RepositoryStats {...props}/>
    </View>
)

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop:5
    },
    language: {
        padding:5,
        color: theme.colors.white,
        backgroundColor: Platform.select({
            android: theme.colors.primary,
            ios: 'orange',
            default: 'purple'
        }) ,
        alignSelf: 'flex-start',
        overflow: 'hidden',
        marginVertical: 4,
        borderRadius: 4
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 4
    }
})

export default RepositoryItem
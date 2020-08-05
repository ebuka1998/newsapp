import React from 'react'
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'

export default function Header({title}) {
    const navigation = useNavigation()
    return (
        <Appbar.Header style={{backgroundColor: '#F7F9F9', elevation: 0.0}}>
            <Appbar.BackAction onPress={() => navigation.goBack()} />
            <Appbar.Content
                style = {{paddingHorizontal: 20}}
                title = {title}
            />
            <Appbar.Action icon="magnify" onPress={() => console.log('object')} />
            <Appbar.Action icon="dots-vertical" onPress={() => console.log('object')} />
        </Appbar.Header>
    )
}

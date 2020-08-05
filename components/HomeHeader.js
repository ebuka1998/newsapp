import React from 'react'
import { Appbar } from 'react-native-paper'




export default function HomeHeader({title}) {
    return (
        <Appbar.Header style={{backgroundColor: '#F7F9F9', elevation: 0.0}}>
            <Appbar.Content
                style = {{paddingHorizontal: 20}}
                title = {title}
            />
            <Appbar.Action icon="magnify" onPress={() => console.log('object')} />
            <Appbar.Action icon="dots-vertical" onPress={() => console.log('object')} />
        </Appbar.Header>
    )
}

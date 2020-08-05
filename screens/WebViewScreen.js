import React from 'react'
import { View, Text } from 'react-native'
import { WebView } from "react-native-webview"
import Header from '../components/Header'


export default function WebViewScreen({route}) {
    const {name, url} = route.params
    return (
        <View style={{flex: 1}}>
            <Header title = {name}/>
            <View style={{width: '100%', height: '100%'}}>
                <WebView 
                    source={{uri: url}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                />
            </View>
        </View>
    )
}

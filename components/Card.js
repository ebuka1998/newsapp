import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

export default function Cardd({title, description, uri, name, url}) {
    const navigation = useNavigation()
    return (
        <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('webview', {
            name: name,
            url: url
        })}>
            <View style={{paddingBottom: 10}}>
                <Card>
                    <Card.Title title={name} />
                        <Card.Cover source={{ uri: uri}} />
                        <Card.Content>
                            <Title>{title}</Title>
                            <Paragraph>{description}</Paragraph>
                        </Card.Content>
                </Card>
            </View>
        </TouchableOpacity>
    )
}

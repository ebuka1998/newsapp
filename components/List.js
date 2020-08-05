import React from 'react'
import { View, Text, Dimensions, TouchableOpacity, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function List(props) {
    const navigation = useNavigation()
    return ( 
        <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('webview', {
            name: props.name,
            url: props.url
        })}>
            <View style={{flexDirection: 'row', paddingBottom: 20}}>
                <Image 
                    source = {{uri: props.uri}}
                    style={{
                        width: '45%',
                        height: 100
                    }}
                />
                <View style={{paddingLeft: 7}}> 
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: '800',
                            color: 'black',
                            width: Dimensions.get('screen').width/2,
                        }}
                        ellipsizeMode = 'tail'
                        numberOfLines={2}
                    >
                    {props.title}
                    </Text>
                    <Text
                         style={{
                            fontSize: 10,
                            width: Dimensions.get('screen').width/2,
                        }}
                        ellipsizeMode = 'tail'
                        numberOfLines={2}
                    >
                        {props.description}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
        
    )
}

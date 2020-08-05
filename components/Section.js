import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {Entypo, MaterialCommunityIcons, MaterialIcons, FontAwesome} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'


export default function Section() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={() => navigation.navigate('politics')}>
                <View>
                    <View style={styles.borderView}>
                        <FontAwesome name="microphone" size={30} color="red" style={styles.icon} />
                    </View>
                    <Text style={{fontSize:12, paddingLeft: 3}}>Politics</Text>
                </View>
            </TouchableOpacity>
           

            <TouchableOpacity onPress={() => navigation.navigate('business')}>
                <View>
                    <View style={styles.borderView}>
                        <MaterialIcons name="business-center" size={30} color="blue" style={styles.icon} />
                    </View>  
                    <Text style={{fontSize:12, paddingLeft: 1}}>Business</Text>
                </View>
            </TouchableOpacity>
            

            <TouchableOpacity onPress={() => navigation.navigate('sports')}>
                <View>
                    <View style={styles.borderView}>
                        <Entypo name="sports-club" size={30} color="orange" style={styles.icon}/>
                    </View> 
                    <Text style={{fontSize:12, paddingLeft: 6}}>Sports</Text>
                </View>
            </TouchableOpacity>
           

            <TouchableOpacity>
                <View style={{alignContent: 'center'}}>
                    <View style={styles.borderView}>
                        <MaterialCommunityIcons name="knife" size={30} color="green" style={styles.icon} />
                    </View> 
                    <Text style={{fontSize:12, paddingLeft: 8}}>crime</Text>
                </View>
            </TouchableOpacity>
           

        </View>
    )
}



const styles = StyleSheet.create({
    container: {flexDirection: 'row', padding: 40, justifyContent: 'space-evenly', paddingHorizontal: 10},

    borderView: {
        borderWidth: 1, 
        borderRadius: 50, 
        height: 50, 
        width: 50,  
        borderColor: '#fcfcfa',
        justifyContent: 'center', 
        padding: 10, 
        backgroundColor: '#fcfcfa' 
    },

    icon: {alignSelf: 'center'}
});






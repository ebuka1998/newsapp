import React, {useEffect, useState} from 'react'
import { View, FlatList } from 'react-native'
import Header from '../components/Header'
import axios from 'axios'
import Cardd from '../components/Card'

export default function Business() {

    const [businessNews, setBusinessNews] = useState([])

    useEffect(() => {
        api()
    },[])


    const api = () => {
        axios.get('http://newsapi.org/v2/top-headlines?country=ng&category=business&apiKey=49fab7ca6a004f799532041af51c6d04')   
        .then(response => {
            let datas = response.data.articles

            datas.filter(data => data.urlToImage === null)
            
            datas.shift()

            setBusinessNews(datas)
        })
        .catch(err => console.log(err.message))

    }

    return (
        <View style={{flex: 1}}>
            <Header title='Business'/>
            <View style={{paddingHorizontal: 10}}>
                
                <View>
                <FlatList
                    showsVerticalScrollIndicator = {false}
                    data={businessNews}
                    renderItem={({ item }) => (
                        <Cardd 
                            title={item.title} 
                            uri={item.urlToImage} 
                            description={item.description} 
                            url={item.url}
                            name={item.source.name}
                        />
                    )}
                    keyExtractor={item => item.title}
                />
                </View> 

            </View>
        </View>
    )
}

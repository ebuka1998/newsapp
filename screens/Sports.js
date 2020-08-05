import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native'
import Header from '../components/Header'
import axios from 'axios'

export default function Sports() {
    const [sportsNews, setSportsNews] = useState([])

    const api = () => {
        axios.get('http://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=49fab7ca6a004f799532041af51c6d04')
        .then(response => {
            let datas = response.data.articles

            datas.filter(data => data.urlToImage === null)
            
            setSportsNews(datas)
        })
        .catch(err => console.log(err.message))

    }

    return (
        <View>
            <Header title='Sports'/>
            <View>
                <Text>sports home</Text>
            </View>
        </View>
    )
}

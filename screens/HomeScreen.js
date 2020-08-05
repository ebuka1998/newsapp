import React, {useEffect, useState} from 'react'
import { View, Text, FlatList } from 'react-native'
import HomeHeader from '../components/HomeHeader';
import Section from '../components/Section';
import List from '../components/List';
import Axios from 'axios';

export default function HomeScreen() {
    const [articless, setArticless] = useState([])

    useEffect(() => {
      api()
    }, [])

    const api = () => {
        Axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=49fab7ca6a004f799532041af51c6d04')
        .then(response => {
            let datas = response.data.articles

            datas.filter(data => data.urlToImage === null)
            
            datas.shift()
            
            setArticless(datas)
        })
        .catch(err => console.log(err.message))

    }
    return (
       <View style={{flex: 1}}>
           <HomeHeader title= 'Newsorg'/>
    
                <View style={{paddingHorizontal: 20}}>
                    <View style={{marginTop: 20}}>
                        <Text style={{fontSize: 40, color: 'black', fontWeight: '800'}}>Discover Latest news</Text>
                    </View>

                    <View>
                        <Section/>
                    </View>

                    <View style={{paddingBottom: 12}}>
                        <Text style={{fontSize: 25}}>Top Headlines</Text>      
                    </View>

                    
                           <View>
                            <FlatList
                                    showsVerticalScrollIndicator = {false}
                                    data={articless}
                                    renderItem={({ item }) => (
                                        <List 
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

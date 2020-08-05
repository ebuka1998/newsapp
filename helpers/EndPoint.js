import axios from 'axios'
import { api, apikey, country } from './Helper';


export async function getApi()  {
    try {
        const response = await axios.get(`https://cors-anywhere.herokuapp.com/${api}?countrty=${country}&apikey=${apikey}`)
        
        return response
    } catch (error) {
        throw error
    }
}
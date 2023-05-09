import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '567f42d5cfmsh2041773cbaae087p1b5306jsnc8c068dfee17',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });
    
    return data;
}


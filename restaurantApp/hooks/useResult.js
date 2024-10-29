import { useEffect } from "react";
import yelp from "../api/yelp";

export default () => {

    const searchApi = async(SearchTerm) =>{

        await yelp.get('/search', {
            params: {
                limit: 50,
                term: SearchTerm,
                location: 'İstanbul'
            }
        })
    }

    useEffect(() => {
        searchApi('Toast')
    },[])

    return [searchApi];
}
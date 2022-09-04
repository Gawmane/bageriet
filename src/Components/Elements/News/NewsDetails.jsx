import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import {Link} from "react-router-dom"

export const NewsDetails = () =>{
    const [goal, setNews] = useState([]);
const {news_id} = useParams();


useEffect(() => {
        const getData = async () => {
            const url = `https://api.mediehuset.net/bakeonline/news/${news_id}`
            const result = await axios.get(url)
           setGoals(result.data.item)
        }
        getData()
        //Dependency array [] - render 1 gang
    }, [news_id]);
    
return(
    <>
   <h1>{newsItem.title}</h1> 
   
    </>
)

}
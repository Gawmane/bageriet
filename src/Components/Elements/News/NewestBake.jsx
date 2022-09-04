import { useState, useEffect } from "react";
import axios from 'axios'
import {Link} from "react-router-dom"
import style from './News.module.scss'


// * istedet for at importer alle icons hver for sig importere vi det under samme navn
import * as Icons from "react-icons/ri"; 

export const NewsBake = () =>{
    const [news, setNews] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const url = 'https://api.mediehuset.net/bakeonline/products?_limit=1 '
            const result = await axios.get(url)
           setNews(result.data.items);
        }
        getData()
        //Dependency array [] - render 1 gang
    }, [setNews]);
   
return(
    <>
    <section className={style.products}>
        {news && news.map((newsItem, i) => {
             if(i < 8){
            return(
                
             <figure>
                   <div style={{backgroundImage: `url(${newsItem.image.fullpath})`}}></div>
                   {/* Icons indsat .RiWechatLine som er det icon vi har hentet online */}
                    <div className={style.comments}>{newsItem.num_comments} <Icons.RiWechatLine/></div>
                
                <figcaption>
                        <h3>{newsItem.title}</h3>
                        <p>{newsItem.teaser.substring(0, 100) + '...'}</p>
                        
                        
                        <Link to={newsItem.id}>Se mere </Link>
                </figcaption>
            </figure>
            )
             }
             else{
                return null
                  }
        })}
        </section>
        
    
    </>
)

}
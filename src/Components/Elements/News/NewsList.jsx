import { useState, useEffect } from "react";
import axios from 'axios'
import {Link} from "react-router-dom"
import style from './News.module.scss'

export const NewsList = () =>{
    const [news, setNews] = useState([]);

    //Laver en useEffect og laver en asynkron Axios kald url klad
    useEffect(() => {
        const getData = async () => {
            const url = 'https://api.mediehuset.net/bakeonline/news'
            const result = await axios.get(url)
           setNews(result.data.items);
        }
        getData()
        //Dependency array [] - render 1 gang
    }, [setNews]);
   
return(
    <>
    <section className={style.news}>

        {/* mapper vores array(api) */}
        {news && news.map((newsItem, i) => {
            // Hvis i(index) er 3 så return dette ellers return ingenting 
            if(i < 3){
            return(
        //  <article >
            <figure key={newsItem.id}>
                    <img src={newsItem.image}  alt="newsimages" />
                <figcaption>
                    <h3> {newsItem.title}</h3>
                    {/* Substring fjerner x tekst og tilføjer ... */}
                    <p>{newsItem.teaser.substring(0, 180) + '...'}</p>
            </figcaption>
        </figure>
    // </article>
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
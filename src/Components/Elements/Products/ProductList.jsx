import { useState, useEffect } from "react";
import axios from 'axios'
import { Link, useParams } from "react-router-dom"
import style from './Product.module.scss'
// * istedet for at importer alle icons hver for sig importere vi det under samme navn
import * as Icons from "react-icons/ri"


export const ProductList = () =>{
      //Laver Usestate hook og usseParams 
    const [apiData, setApiData] =useState([])
    const {cat_id} = useParams() 

//UsesEffect - hvordan skal kaldet laves 
   useEffect(() => {
       //Fetch data med axios 
    const getData = async () => {
    const url = `https://api.mediehuset.net/bakeonline/categories/${cat_id}`
   
    try{
    const result = await axios.get(url)
    setApiData(result.data.item.products);
    }
     //Ved fejl vis 
     catch(err){
        console.error(err)
                }
            }
    //Funktionskald        
    getData()

    //Dependency array [] 
}, [cat_id] );

   
 
return(
   <aside className={style.products}>

      {/* Tjek apidata findes og map items  */}  
    {apiData && apiData.map(item => {
        return (
            <figure key={item.id}>
                 <div style={{backgroundImage: `url(${item.image.fullpath})`}}></div>
                   {/* Icons indsat .RiWechatLine som er det icon vi har hentet online */}
                   <div className={style.comments}>{item.num_comments} <Icons.RiWechatLine/></div>
                   <figcaption>
                        <h3>{item.title.toUpperCase()}</h3>
                        <p>{item.teaser.substring(0, 80) + '...'}</p>
                        {/* Refancrance  */}
                      <li key={cat_id} > <Link to={`/products/${cat_id}/${item.id}`}>Se mere
                </Link></li> 
                             
               
                </figcaption>
            </figure>
        )
    })}

     </aside>
      
)

}
import axios from "axios";
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import style from './Product.module.scss'

export const CateoryList = () =>{

    //Laver Usestate hook
    const [apiData, setApiData] =useState([])

    //UsesEffect - hvordan skal kaldet laves 
    useEffect(() => {
        //Fetch data med axios 
        const getData = async () => {
        // Vores url link
        const url = "https://api.mediehuset.net/bakeonline/categories"
        try{
        const result = await axios.get(url)
        setApiData(result.data.items)  
        }
        //Ved fejl vis 
        catch(err){
console.error(err)
        }
           
    }
        getData()
        //Depemtensy array - vores sætter 
    }, [setApiData]);


    return(
<aside className={style.categories}>
    <ul >

    {/* Tjek apidata findes og map items  */}
    {apiData && apiData.map(item => {
        return (
             
            <li key={item.id}>
                {/* <Link activeStyle={{fontWeight: "bold"}} to={`/Produkter/${item.id}`}>{item.title}</Link></li> */}
               
                <NavLink to={`/Produkter/${item.id}`}>{item.title}</NavLink> </li>
            
        )
    })}
</ul>
</aside>
    )
}
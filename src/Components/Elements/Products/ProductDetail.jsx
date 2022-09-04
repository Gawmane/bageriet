import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";



export const ProductsDetail = () =>{
       //Laver Usestate hook og usseParams 
    const [apiData, setApiData] = useState({})
    const {product_id} = useParams() 
 
//UsesEffect - hvordan skal kaldet laves
    useEffect(() => {
       //Fetch data med axios 
     const getData = async () => {

      try{
        const result = await axios.get(`https://api.mediehuset.net/bakeonline/products/${product_id}`)
        setApiData(result.data.item);}
        
      //Ved fejl vis 
     catch(err){
      console.error(err)
              }
     }
     //Funktionskald
     getData()
     //Dependency array [] 
 }, [product_id]);
 
    
  
 return(
     <>
     <section className="details">
        
        <article>
             <h2>{apiData.title}</h2>
             <p>{apiData.description}</p>
        </article>

     </section>
         
      
     </>
 )
 
 }
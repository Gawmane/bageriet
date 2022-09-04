import axios from 'axios';
import { useState } from 'react';
import style from './News.module.scss'

export const NewsLetter = () =>{
    const [mail, setMail] = useState([]);
    const [feedback, setFeedback] = useState([]);

    //Funktion til submit knappen - Laver et e(event) 
    const submit2Newsletter = async (e) => {

        e.preventDefault()

        const url = "https://api.mediehuset.net/bakeonline/newsletter";
        const formData = new URLSearchParams();
        const result = await axios.post(url, formData)
        

        if(result.error) {
            setFeedback('Mailen er allerede tilmeldt nyhedsbrevet');
        } else {
            setFeedback('Tak for din tilmelding. Du er nu tilmeldt nyhedsbrevet.');
        }

    }
     async function postAuthData(url, key, formdata) {
    
        const options = {
            method: 'POST',
            body: formdata,
            headers: {
                'Authorization' : `Baerer ${key}`
            }
        }
    
        try {
            const response = await fetch(url, options)
            const data = await response.json()
            return data
        }
        catch(error) {
            setFeedback('Der er fejl')
        }
    }


    return (
        <section className={style.newsletter}>
           
                <h2>Tilmeld dig vores nyhedsbrev</h2>
                <form onSubmit={(e) => {submit2Newsletter(e)}}>
                    <input value={mail} onChange={(e) => {setMail(e.target.value)}} type="email" placeholder="Indtast email" />
                    <button type="submit">Tilmeld</button>
                </form>
                <p>{feedback}</p>
            
        </section>
   
    )}

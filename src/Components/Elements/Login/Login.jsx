import { useState, useContext } from "react"
import {AuthContext} from '../Login/Provider'
import axios from 'axios'
import style from '../Login/Login.module.scss'



export const Login = () =>{
    const textMessage = 'For at logge ind, indtast dit brugernavn og adgangskode'
    const [message, setMessage] = useState(textMessage);
    const {loginData, setLoginData} = useContext(AuthContext);

//Funktion til submit knappen - Laver et e(event) - Få fat i data fra min formular
const SubmitLogin = async e => {
    const formData = new FormData(e.target.form)
    
//Login const med api url
     const url = 'https://api.mediehuset.net/token'
   
 //Laver kald
   try{
    const result = await axios.post(url, formData)
    SessionData(result);
}
//Fejl besked 
    catch(err) {
    setMessage('Kunne ikke logge ind')
}

}

//Konst til at handle session data 
const SessionData = resp => {
    if(resp.status === 201){
         //Laver json om til string 
        sessionStorage.setItem('token', JSON.stringify(resp.data))
        setLoginData(resp.data)
        //Tilføjer meddelse - henter brugernavnet som er logget ind og skriver det i meddelsen 
        setMessage(`Du er logget ind som ${resp.data.username}`)
}
// hvis ikke - skriv besked kunne ikke logge ind
    else {
         setMessage('Kunne ikke matche brugernavn eller adgangskode');
}
}

//Log ud funktion - fjerner token fra sessionstorage og giver meddelse 
const logOut = ()=>{
    sessionStorage.removeItem('token')
    setLoginData('')
    setMessage('Du er logget ud')
}

    return(
        <section>
         <p>{message}</p>
        {/* Ternery opperator - Måler om vi er logget ind eller ej  */}
        {!loginData ?
            
             <form className={style.loginform}  method="post">
                            
                                <label htmlFor="username">Brugernavn: </label>
                                <input type="text" name="username" id="fullname"/>
                    
                                <label htmlFor="password">Password: </label>
                                <input type="password" name="password" id="email"/>
                    
                    {/* Ved klik kalder vi funktionen SubmitLogin */}
                                <button type="button" id="submit" onClick={SubmitLogin}>Login</button>
                                <button type="reset" id="reset">Nulstil</button>
            
                        </form>
        :
        <form className={style.logout}>
            {/* Ved klik kalder vi funktionen logOut */}
            <button onClick={logOut}>Log af </button>
        </form>
}
        
        </section>
    )
}
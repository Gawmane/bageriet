 import { useState, useEffect, createContext } from "react";

  const AuthContext = createContext()

//Sender alle de children (property) der er under componentet så de har tilgang
  const AuthProvider = ({children}) =>{
      // useState hook - får haft i det data vi logger ind med
     const [loginData, setLoginData]= useState('');

//Styre hvornår data skal køres - gør det når der sker noget i vores children componenter 
     useEffect (()=>{
         //  hvis token er sæt skal vi køre setLoginData
      if(sessionStorage.getItem('token')){
          //Laver vores token til et json objekt 
      setLoginData(JSON.parse(sessionStorage.getItem('token')))
  }
 //     // depenentcy array - vil rendere hvis et af under componenterne ændre sig
 }, [children])

 //Alle chrilden i authcontext for tilgang til vores context
return(
     <AuthContext.Provider value ={{loginData, setLoginData}}>
         {children}
     </AuthContext.Provider>
 )
 }
export  { AuthContext, AuthProvider}
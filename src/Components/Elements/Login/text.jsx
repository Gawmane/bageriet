import { createContext, useEffect, useState} from "react"


const testContent = createContext(test)




 const testProvider = ({children}) =>{
   const [test, setTest] = useState({test : 'test'})

useEffect(() => {
    setTest({test : 'test'})
}, [children])


    return(
<testContent.Provider value={test}>
    {children}
    </testContent.Provider>
    )
}
export  {testContent, testProvider}
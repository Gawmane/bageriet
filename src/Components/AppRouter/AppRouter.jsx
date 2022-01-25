import {Routes, Route} from 'react-router-dom'
import arrNavItems from '../../assets/data/arrNavItems'

export const AppRouter =() => {
return(
    <Routes>
        {/* Impoter array */}
        {arrNavItems.map((item, key) => {
           
                return(
                // henter data fra array
                <Route key={key} path={item.path} element={item.element}/>
            )
        })}
    
   
      </Routes>
)

}
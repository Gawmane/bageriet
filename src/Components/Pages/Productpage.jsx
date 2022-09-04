import { Outlet } from 'react-router'
import {CateoryList} from '../Elements/Products/Category'


export const Productpage = () =>{
    return(
        <section>
        <h2>Vores elskede bagværk</h2>
        <p>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer</p>

        <CateoryList/>
        <Outlet />
    </section>
    )
}
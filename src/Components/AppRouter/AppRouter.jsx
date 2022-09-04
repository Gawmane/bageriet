//Import af hjælpere fra react / npm instalitioner 
import { useEffect } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom'

//Components Elementer
import { Login } from '../Elements/Login/Login';
import { ProductsDetail } from '../Elements/Products/ProductDetail';
import { ProductList } from '../Elements/Products/ProductList';

//Components Pages
import { Contactpage } from '../Pages/Contactpage';
import { NotFound } from '../Pages/Error/Error';
import { Frontpage } from '../Pages/Home/Frontpage';
import { Productpage } from '../Pages/Productpage';

//Omdirigere
const Redirect = ({to}) => {
    let navigate = useNavigate();
    useEffect(() => {
        navigate(to);
    });
    return null;
}

// laver Routes 
export const AppRouter =() => {
return(
    <Routes>
        <Route index element={<Frontpage />} />

        {/* Neste router ved product som kan redritce vores path */}
			<Route path="/Produkter" element={<Productpage />}>
            <Route index element={<Redirect to="/Produkter/1" />}></Route>
                 
				<Route path=":cat_id">
                <Route index element={<ProductList />}></Route>
					<Route path=":product_id" element={<ProductsDetail/>} />
				</Route>
			</Route>

			<Route path="/Kontakt" element={<Contactpage />} />
            <Route path="/login" element={<Login />} />

            {/* Fejl side */}
            <Route path="*" element={<NotFound/>} />

      </Routes>
)

}
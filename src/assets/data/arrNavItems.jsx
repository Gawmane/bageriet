
//Routes
import {Home} from '../../Components/Pages/Home/Home';
 import {NotFound} from '../../Components/Pages/Error/Error';


//Array til vores navigation - router
const arrNavItems = [
    {
        title: 'Home',
        path: '/',
        element: <Home/>,
        display: true
    },
   
    // Display false ved notfound for ikke at få den vist vi vores navigation 
    {
        title: 'NotFound',
        path: '*',
        element: <NotFound/>,
        display: false
    },
  
]

export default arrNavItems
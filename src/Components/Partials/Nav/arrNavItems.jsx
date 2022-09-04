
// //Routes
// import {Frontpage} from '../../Pages/Home/Frontpage';
// import {Productpage} from '../../Pages/Productpage';
// import {Contactpage} from '../../Pages/Contactpage';
// import {Loginpage} from '../../Pages/Loginpage';


// import {NotFound} from '../../Pages/Error/Error';



//Array til vores navigation - router
const arrNavItems = [
    {
        title: 'Forside',
        path: '/',
        display: true
    },
    {
        title: 'Produkter',
        path: '/produkter',
        display: true
    },
    
    {
        title: 'Bageriet',
        path: '/',
       
        display: true
    },
    {
        title: 'Kontakt',
        path: '/kontakt',
       
        display: true
    },
    {
        title: 'Login',
        path: '/login',
        
        display: true
    },
   
    // Display false ved notfound for ikke at få den vist vi vores navigation 
    {
        title: 'NotFound',
        path: '*',
     
        display: false
    },
    
  
]

export default arrNavItems
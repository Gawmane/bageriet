import style from '../Header/Header.module.scss'
import {Nav} from '../Nav/Nav'

// Array til nav - viser path til den side man klikker ind på


const arrNav = [
    { name: 'Home', path: '/'},
    { name: '', path: '/'},
    { name: '', path: '/'},
    { name: '', path: '/'},
    { name: '', path: '/'}

 
 
 ]

export const Header = (props) => {
	return (
        <header> 
            <h1></h1>
                  <Nav navItems ={arrNav}/>
         </header>
	)
}
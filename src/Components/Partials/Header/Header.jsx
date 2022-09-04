import style from '../Header/Header.module.scss'
import { Nav } from '../Nav/Nav'


// Array til nav - viser path til den side man klikker ind på


const arrNav = [
    { name: 'FORSIDE', path: '/' },
    { name: 'PRODUKTER', path: '/produkter' },
    { name: 'bageriet', path: '/' },
    { name: 'KONTAKT', path: '/kontakt' },
    { name: 'LOGIN', path: '/login' }



]

export const Header = (props) => {
    return (

        <header>
            <h1></h1>
            <Nav navItems={arrNav} />

        </header>

    )
}
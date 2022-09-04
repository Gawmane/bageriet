import style from '../Nav/Nav.module.scss'
import { NavLink } from 'react-router-dom'
import arrNavItems from './arrNavItems';

export const Nav = () => {

    return (
        <nav >

            <ul>

                {arrNavItems.map((item, key) => {

                    return (
                        item.display ?
                            <li>
                                {/* Smider sti og title ind fra vores array og sætter den sammen med vores navn/router */}
                                <NavList key={key} path={item.path} title={item.title} />
                            </li>
                            : null
                    )
                })}

            </ul>

        </nav>
    )
}
const NavList = props => {
    return (
        <li>
            <NavLink to={props.path}>{props.title}</NavLink>
        </li>
    )
}
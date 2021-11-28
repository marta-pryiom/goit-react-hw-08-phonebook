import { NavLink } from 'react-router-dom';
import s from './InfoNav.module.css';
function InfoNav() {
    return (
        <ul className={s.list}>
            <li className={s.item}>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? s.activeItem : s.notActiveItem
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/contacts"
                    className={({ isActive }) =>
                        isActive ? s.activeItem : s.notActiveItem
                    }
                >
                    Contacts
                </NavLink>
            </li>
        </ul>
    );
}
export default InfoNav;

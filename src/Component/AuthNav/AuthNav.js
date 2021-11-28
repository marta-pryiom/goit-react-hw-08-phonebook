import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';
function AuthNav() {
    return (
        <ul className={s.list}>
            <li>
                <NavLink
                    to="/register"
                    className={({ isActive }) =>
                        isActive ? s.activeItem : s.notActiveItem
                    }
                >
                    Register
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/login"
                    className={({ isActive }) =>
                        isActive ? s.activeItem : s.notActiveItem
                    }
                >
                    Login
                </NavLink>
            </li>
        </ul>
    );
}
export default AuthNav;

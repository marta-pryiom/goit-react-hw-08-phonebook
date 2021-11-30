import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import InfoNav from '../InfoNav';
import s from './HeaderNavigation.module.css';

function HeaderNavigation() {
    const isAuth = useSelector(getIsLoggedIn);
    console.log(isAuth);
    return (
        <header className={s.header}>
            <InfoNav />
            {isAuth ? <UserMenu /> : <AuthNav />}
        </header>
    );
}
export default HeaderNavigation;

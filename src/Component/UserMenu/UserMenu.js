import { useDispatch } from 'react-redux';
// import { getUsername } from '../../redux/auth/auth-selectors';

// import pathToSprite from '../../images/sprite.svg';
// import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import s from './UserMenu.module.css';
import { logOut } from '../../redux/auth/auth-operations';

function UserMenu() {
    const dispatch = useDispatch();

    // const nameOfUser = useSelector(getUsername);

    return (
        <>
            <button
                className={s.btn}
                type="button"
                onClick={() => dispatch(logOut())}
            >
                Log out
            </button>
        </>
    );
}
export default UserMenu;

/* <div className={s.box}>
                <svg className={s.userIcon}>
                    <use href={pathToSprite + '#user'}></use>
                </svg>
                <p className={s.title}>
                    Welcome,
                    {nameOfUser}
                </p>
            </div> */

import s from './Home.module.css';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

function Home() {
    const isAuth = useSelector(getIsLoggedIn);
    return isAuth ? (
        <img
            className={s.image}
            src="https://thumbs.dreamstime.com/b/wellcome-22218814.jpg"
            alt="pnone"
        />
    ) : (
        <div className={s.box}>
            <img
                className={s.image}
                src="https://thumbs.dreamstime.com/b/wellcome-22218814.jpg"
                alt="pnone"
            />
            <h1 className={s.title}>
                Please log in or register to use Contacts
            </h1>
        </div>
    );
}

export default Home;

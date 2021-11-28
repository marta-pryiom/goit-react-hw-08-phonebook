import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/auth/auth-operations';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import s from './Login.module.css';
import pathToSprite from '../../images/sprite.svg';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const isAuth = useSelector(getIsLoggedIn);
    const avatar = 'https://www.syn-enosis.gr/media/1909/group-5-2x.png';
    // const avatar2 =
    //     'https://cdn.iconscout.com/icon/premium/png-256-thumb/laptop-login-4041793-3373879.png';
    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(logIn({ email, password }));
        reset();
    };
    const reset = () => {
        setEmail('');
        setPassword('');
    };
    return (
        !isAuth && (
            <div className={s.loginBox}>
                <div className={s.boxAvatar}>
                    <img alt="avatar" src={avatar} className={s.avatarIcon} />
                    <svg className={s.triangle}>
                        <use href={pathToSprite + '#triangle'}></use>
                    </svg>
                    <svg className={s.triangleTwo}>
                        <use href={pathToSprite + '#play'}></use>
                    </svg>
                    <svg className={s.circle}>
                        <use href={pathToSprite + '#circle'}></use>
                    </svg>
                    <svg className={s.circleTwo}>
                        <use href={pathToSprite + '#circle'}></use>
                    </svg>
                    <svg className={s.square}>
                        <use href={pathToSprite + '#square'}></use>
                    </svg>
                </div>
                <div className={s.box}>
                    <h1 className={s.title}>Member Login</h1>
                    <form onSubmit={handleSubmit}>
                        <label className={s.labelItemEmail}>
                            <svg className={s.iconEnvelope}>
                                <use
                                    href={pathToSprite + '#icon-envelope'}
                                ></use>
                            </svg>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                placeholder="Email"
                                className={s.formItem}
                                autoComplete="true"
                                onChange={handleChange}
                            />
                        </label>

                        <label className={s.labelPassword}>
                            <svg className={s.iconLock}>
                                <use href={pathToSprite + '#icon-locked'}></use>
                            </svg>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                placeholder="Password"
                                className={s.formItem}
                                autoComplete="true"
                                onChange={handleChange}
                            />
                        </label>
                        <button type="submit" className={s.btn}>
                            LOGIN
                        </button>
                    </form>
                    <div className={s.addBox}>
                        <p className={s.forgotInfo}>
                            Forgot{' '}
                            <span className={s.forgotAddInfo}>
                                Username/Password?
                            </span>
                        </p>
                        <button type="button" className={s.addBtn}>
                            Create your Account
                            <svg className={s.Icon}>
                                <use href={pathToSprite + '#arrow-right'}></use>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        )
    );
}
export default Login;

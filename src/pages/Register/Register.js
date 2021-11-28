import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { register } from '../../redux/auth/auth-operations';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import s from './Register.module.css';

export default function Register() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const isAuth = useSelector(getIsLoggedIn);
    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
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
        dispatch(register({ name, email, password }));
        toast.success(`Welcome ,${name}! You are registered`, {
            position: 'top-center',
            autoClose: 2500,
        });
        reset();
    };
    const reset = () => {
        setName('');
        setEmail('');
        setPassword('');
    };
    return (
        !isAuth && (
            <div className={s.registerBox}>
                <div className={s.boxAvatar}>
                    <img
                        className={s.avatar}
                        src="https://static.vecteezy.com/system/resources/previews/002/197/244/original/glowing-neon-laptop-with-password-notification-icon-isolated-on-brick-wall-background-concept-of-security-personal-access-user-authorization-login-form-illustration-vector.jpg"
                        alt="avatar"
                    />
                </div>
                <div className={s.box}>
                    <h1 className={s.title}>Member Register</h1>
                    <form onSubmit={handleSubmit} className={s.form}>
                        <label className={s.labelItem}>
                            <input
                                type="text"
                                name="name"
                                className={s.formItem}
                                value={name}
                                placeholder="name"
                                autoComplete="true"
                                onChange={handleChange}
                            />
                        </label>

                        <label className={s.labelItem}>
                            <input
                                type="email"
                                name="email"
                                className={s.formItem}
                                value={email}
                                placeholder="email"
                                autoComplete="true"
                                onChange={handleChange}
                            />
                        </label>

                        <label className={s.labelItem}>
                            <input
                                type="password"
                                name="password"
                                className={s.formItem}
                                value={password}
                                placeholder="password"
                                autoComplete="true"
                                onChange={handleChange}
                            />
                        </label>
                        <button type="submit" className={s.btn}>
                            SIGN IN
                        </button>
                    </form>
                </div>
            </div>
        )
    );
}

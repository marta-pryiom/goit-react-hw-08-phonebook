import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Suspense, lazy, useEffect } from 'react';
import { currentUser } from '../../redux/auth/auth-operations';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import { ToastContainer } from 'react-toastify';
import Container from '../Container';
import PrivatFn from '../../routes/PrivatRoute';
import PublicFn from '../../routes/PublicRoute';
import HeaderNavigation from '../HeaderNavigation';
import Loader from '../Loader';
const Contacts = lazy(() => import('../../pages/Contacts'));
const Home = lazy(() => import('../../pages/Home'));
const Login = lazy(() => import('../../pages/Login'));
const Register = lazy(() => import('../../pages/Register'));

function App() {
    const isAuth = useSelector(getIsLoggedIn);
    console.log(isAuth);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(currentUser());
    }, [dispatch]);

    return (
        <>
            <HeaderNavigation />
            <ToastContainer />
            <Container>
                <Suspense fallback={<Loader />}>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <PublicFn isAuth={isAuth} component={Home} />
                            }
                        ></Route>
                        <Route
                            path="/contacts"
                            element={
                                <PrivatFn
                                    isAuth={isAuth}
                                    component={Contacts}
                                />
                            }
                        ></Route>
                        <Route
                            path="/register"
                            element={
                                <PublicFn
                                    isAuth={isAuth}
                                    component={Register}
                                />
                            }
                        ></Route>
                        <Route
                            path="/login"
                            element={
                                <PublicFn isAuth={isAuth} component={Login} />
                            }
                        ></Route>
                    </Routes>
                </Suspense>
            </Container>
        </>
    );
}

export default App;

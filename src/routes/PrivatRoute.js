import { Navigate } from 'react-router';
function PrivatFn({ isAuth, component: Component }) {
    return <>{isAuth ? <Component /> : <Navigate to="/login" />}</>;
}
export default PrivatFn;

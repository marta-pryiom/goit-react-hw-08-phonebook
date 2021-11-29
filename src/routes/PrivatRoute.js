import { Navigate } from 'react-router-dom';
function PrivatFn({ isAuth, component: Component }) {
    return <>{isAuth ? <Component /> : <Navigate to="/login" />}</>;
}
export default PrivatFn;

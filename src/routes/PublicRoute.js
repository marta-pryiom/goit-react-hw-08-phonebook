import { Navigate } from 'react-router';
function PublicFn({ isAuth, component: Component }) {
    return (
        <>
            {isAuth ? (
                <Navigate to="/contacts" /> || <Component />
            ) : (
                <Component />
            )}
        </>
    );
}
export default PublicFn;

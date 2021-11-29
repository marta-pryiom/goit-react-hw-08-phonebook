import { Navigate } from 'react-router-dom';
function PublicFn({ isAuth, component: Component }) {
    return (
        <>
            {isAuth ? (
                <Navigate to="/contacts" /> && <Component />
            ) : (
                <Component />
            )}
        </>
    );
}
export default PublicFn;

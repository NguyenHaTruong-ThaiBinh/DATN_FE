import { Navigate, Outlet, useOutletContext } from 'react-router-dom';
import Cookies from 'js-cookie';

const AdminRoutes = () => {
  const role = Cookies.get('role');
  const context = useOutletContext();

  if (!(role === 'ADMIN')) {
    return <Navigate to={'/no-authorization'} />;
  } else {
    return <Outlet context={context} />;
  }
};

export default AdminRoutes;

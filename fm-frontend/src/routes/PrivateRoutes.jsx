import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivateRoutes = ({ children }) => {
  let navigate = useNavigate();
  const idUser = Cookies.get('idUser');
  useEffect(() => {
    if (!idUser) {
      navigate('/');
    }
  }, []);

  return idUser && children;
};

export default PrivateRoutes;

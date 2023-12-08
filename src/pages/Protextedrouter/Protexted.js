// Protexted.jsx
import React, { useContext } from 'react';
import { Mycontext } from '../../Context/Context';
import { Navigate, Outlet} from 'react-router-dom';

function Protexted({children ,user}) {
  const { name, password } = useContext(Mycontext);

  
  if (user) {
    return <Navigate to="/login" />;
  }

  return children ?   <Outlet></Outlet>:children;
}

export default Protexted;

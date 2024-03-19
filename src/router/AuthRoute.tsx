import { Navigate } from 'react-router-dom';
import { getToken } from '../utils/user-token';
import React from 'react';
type Props = {
  children?: JSX.Element;
};
function AuthRoute({ children }:Props) {
	const tokenStr = getToken();
	if (tokenStr) {
		return <>{children}</>;
	} else {
		return <Navigate to="/login" replace />;
	}
}
export {AuthRoute}
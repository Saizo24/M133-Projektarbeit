import { Navigate } from 'react-router-dom';
import { isLoggedIn } from '../../../services/AuthService';

export type ProtectedRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
  outlet: JSX.Element;
};

export const ProtectedRoute = ({ isAuthenticated, authenticationPath, outlet }: ProtectedRouteProps) => {
  if (isLoggedIn()) {
    console.log("Protected Route authenticated")
    return outlet;
  }

  return <Navigate to={{ pathname: authenticationPath }} />;
};
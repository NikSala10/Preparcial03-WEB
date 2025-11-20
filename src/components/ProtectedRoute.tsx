import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { Navigate } from "react-router-dom";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
 const userType = useSelector((state: RootState) => state.user.user);

  if (!userType?.name || !userType.role) {
    return <Navigate to="/" replace />; 
  }
  return children;
};

export default ProtectedRoute;
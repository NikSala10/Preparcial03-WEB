import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { Navigate } from "react-router-dom";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
 const userType = useSelector((state: RootState) => state.user.userType);
 console.log("ROL ACTUAL EN PROTECTED:", userType);

  if (userType !== "admin") {
    return <Navigate to="/" replace />; 
  }
  return children;
};

export default ProtectedRoute;
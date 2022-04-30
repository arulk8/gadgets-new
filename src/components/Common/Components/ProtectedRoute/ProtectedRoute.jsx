import { Navigate } from "react-router";
import { useStore } from "../../../../store/app-store-context";
const ProtectedRoute = ({ children, path }) => {
  const { isLoggedIn } = useStore();

  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: { path } }} />
  );
};

export default ProtectedRoute;

import React from "react";
import { Navigate } from "react-router-dom";

import { useAppSelector } from "@redux/hooks";
import { RootState } from "@redux/store";
interface ProtectedRouteProps {
  children: JSX.Element;
}
const ProtectLogin: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isloggin } = useAppSelector((state: RootState) => state.user);
  return isloggin ? <Navigate to="/user-profile" /> : children;
};
export default ProtectLogin;

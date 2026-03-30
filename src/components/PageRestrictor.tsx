import { Navigate, useLocation } from "react-router-dom";
import { useUserInfo } from "../hooks/user/useUserInfo";
import Loader from "./Loader/Loader";

const PAGE_RESTRICTIONS = ["authorized", "not authorized"] as const;
export type PageRestriction = (typeof PAGE_RESTRICTIONS)[number];

interface PageRestrictorProps {
  restriction: PageRestriction;
  children: React.ReactNode;
}

const PageRestrictor = ({ restriction, children }: PageRestrictorProps) => {
  const { data: userInfo, isLoading } = useUserInfo();
  const location = useLocation();

  if (restriction === "authorized" && !userInfo) {
    if (isLoading) return <Loader />;
    // store route to return after login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (restriction === "not authorized" && userInfo) {
    // if previous route is stored return
    // else go to tasks
    const origin = location.state?.from?.pathname || "/tasks";
    return <Navigate to={origin} replace />;
  }

  return <>{children}</>;
};

export default PageRestrictor;

import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router";
import { CentreWrapper } from "./protectedRoutes.styles.js";
import { PuffLoader } from "react-spinners";
import useCheckAuthorised from "../../Hooks/useCheckAuthorised";

export default function ProtectedAuthRoutes() {
  const navigate = useNavigate();
  const { data, isLoading } = useCheckAuthorised();

  useEffect(() => {
    if (data && !isLoading) navigate("/home", { replace: true });
  }, [data, isLoading, navigate]);

  if (isLoading)
    return (
      <CentreWrapper>
        <PuffLoader size={100} />
      </CentreWrapper>
    );
  if (!data) {
    return <Outlet />;
  }
  return null;
}

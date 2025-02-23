import { useEffect } from "react";
import { useNavigate } from "react-router";
import { CentreWrapper } from "./protectedRoutes.styles.js";
import { PuffLoader } from "react-spinners";
import useCheckAuthorised from "../../Hooks/useCheckAuthorised";

export default function ProtectedRoutes({ children }) {
  const navigate = useNavigate();

  const { data, isLoading } = useCheckAuthorised();

  useEffect(() => {
    if (data?.role !== "authenticated" && !isLoading)
      navigate("/login", { replace: true });
  }, [data, isLoading, navigate]);
  if (isLoading)
    return (
      <CentreWrapper>
        <PuffLoader size={100} />
      </CentreWrapper>
    );
  if (!data) return null;
  return children;
}

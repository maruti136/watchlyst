import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import logoutAPI from "../supabase/supabaseLogoutAPI";
import toast from "react-hot-toast";

export default function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutAPI,
    onSuccess: () => {
      toast.success("Logged out successfully!");
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
    onError: (err) => toast.error(`${err.message.slice(6, 100)}`),
  });
  return { logout, isPending };
}

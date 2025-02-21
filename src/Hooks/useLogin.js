import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import loginAPI from "../supabase/supabaseLoginAPI";
import { useQueryClient } from "@tanstack/react-query";

export default function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    mutate: login,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: loginAPI,
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], (oldData) => {
        console.log(oldData);
        return {
          ...data.user,
        };
      });
      toast.success("Login successful!");
      navigate("/home", { replace: true });
    },
    onError: (err) => toast.error(`${err.message.slice(6, 100)}`),
  });

  return { login, isPending, isSuccess };
}

import { useMutation } from "@tanstack/react-query";
import signUpAPI from "../supabase/supabaseSignUpAPI";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export default function useSignUp() {
  const navigate = useNavigate();
  const { mutate: signUp, isPending } = useMutation({
    mutationFn: signUpAPI,
    onSuccess: () => {
      toast.success("Sign up successful");
      navigate("/home");
    },
    onError: (err) => toast.error(`${err.message.slice(6, 100)}`),
  });

  return { signUp, isPending };
}

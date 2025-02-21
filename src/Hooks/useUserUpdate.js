import { useMutation } from "@tanstack/react-query";
import userUpdateAPI from "../supabase/supabaseUserUpdateAPI";
import toast from "react-hot-toast";

export default function useUserUpdate() {
  const { mutate: updateUser, isPending } = useMutation({
    mutationFn: userUpdateAPI,
    onSuccess: () => toast.success("Profile updated successfully!"),
    onError: (err) => toast.error(`${err.message.slice(6, 100)}`),
  });
  return { updateUser, isPending };
}

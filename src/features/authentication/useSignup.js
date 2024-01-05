import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user);
      toast.success("Account created successfully!");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return { signup, isLoading };
}

export default useSignup;

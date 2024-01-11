import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser as updateCurrentUserApi } from "../../services/apiAuth";

function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: ({ password, fullName, avatar }) =>
      updateCurrentUserApi({ password, fullName, avatar }),
    onSuccess: ({ user }) => {
      toast.success("User account successfully updated");
      queryClient.setQueryData(["user"], user);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { isUpdating, updateUser };
}

export default useUpdateUser;

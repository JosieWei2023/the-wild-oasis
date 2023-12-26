import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";

export default function useDeleteCabin() {
  // useQueryClient is a hook that returns the queryClient instance
  const queryClient = useQueryClient();

  // useMutation returns an object with isLoading, mutate, and error properties
  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      toast.success("Cabin deleted successfully!");
      // invalidate the query so that it will refetch the data
      queryClient.invalidateQueries("cabins");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isDeleting, deleteCabin };
}

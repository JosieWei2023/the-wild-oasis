import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";

export default function useDeleteBooking() {
  // useQueryClient is a hook that returns the queryClient instance
  const queryClient = useQueryClient();

  // useMutation returns an object with isLoading, mutate, and error properties
  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: () => {
      toast.success("Booking deleted successfully!");
      // invalidate the query so that it will refetch the data
      queryClient.invalidateQueries({ active: true });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isDeleting, deleteBooking };
}

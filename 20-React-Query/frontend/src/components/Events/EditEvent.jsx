import {
  Link,
  redirect,
  useNavigate,
  useNavigation,
  useParams,
  useSubmit,
} from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import {
  // useMutation,
  useQuery,
} from "@tanstack/react-query";
import { fetchEvent, queryClient, updateEvent } from "../../utils/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
  const navigate = useNavigate();
  const { state } = useNavigation();
  const submit = useSubmit();
  const params = useParams();
  const eventId = params.id;

  const { data, isError, error } = useQuery({
    queryKey: ["events", { eventId }],
    queryFn: ({ signal }) => fetchEvent({ id: eventId, signal }),
    staleTime: 10000,
  });

  // const { mutate } = useMutation({
  //   mutationFn: updateEvent,
  //   onMutate: async (data) => {
  //     const newEvent = data.event;
  //     await queryClient.cancelQueries({
  //       queryKey: ["events", { eventId }],
  //     });
  //     const previousEvent = queryClient.getQueryData(["events", { eventId }]);
  //     queryClient.setQueryData(["events", { eventId }], newEvent);

  //     return { previousEvent };
  //   },
  //   onError: (error, data, context) => {
  //     queryClient.setQueryData(["events", { eventId }], context.previousEvent);
  //   },
  //   onSettled: () => {
  //     queryClient.invalidateQueries(["events", { eventId }]);
  //   },
  // });

  function handleSubmit(formData) {
    submit(formData, {
      method: "PUT",
    });
  }

  function handleClose() {
    navigate("../");
  }

  let content;

  if (isError) {
    content = (
      <>
        <ErrorBlock
          title="An error occurred!"
          message={
            error.info?.message ||
            "Failed to fetch event details. Please try again later."
          }
        />
        <div className="form-actions">
          <Link to="../" className="button">
            Okay
          </Link>
        </div>
      </>
    );
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        {state === "submitting" ? (
          <p>Sending data...</p>
        ) : (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Update
            </button>
          </>
        )}
      </EventForm>
    );
  }

  return <Modal onClose={handleClose}>{content}</Modal>;
}

export const loader = ({ params }) => {
  const eventId = params.id;
  return queryClient.fetchQuery({
    queryKey: ["events", { eventId }],
    queryFn: ({ signal }) => fetchEvent({ id: eventId, signal }),
  });
};

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const updatedEventData = Object.fromEntries(formData);

  await updateEvent({
    id: params.id,
    event: updatedEventData,
  });
  await queryClient.invalidateQueries(["events"]);
  return redirect("../");
};

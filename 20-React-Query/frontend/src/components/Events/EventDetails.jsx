import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

import Header from "../Header.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteEvent, fetchEvent, queryClient } from "../../utils/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import Modal from "./../UI/Modal.jsx";
import { useState } from "react";

export default function EventDetails() {
  const [isDeleting, setIsDeleting] = useState(false);

  const params = useParams();
  const eventId = params.id;

  const navigate = useNavigate();

  const {
    data,
    isPending: isFetchingPending,
    isError: isFetchingError,
    error: fetchingError,
  } = useQuery({
    queryKey: ["events", { eventId }],
    queryFn: ({ signal }) => fetchEvent({ id: eventId, signal }),
  });

  const {
    mutate,
    isPending: isDeletingPending,
    isError: isDeletingError,
    error: deletingError,
  } = useMutation({
    mutationFn: () => deleteEvent({ id: eventId }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
        refetchType: "none",
      });
      navigate("/events");
    },
  });

  const handleStartDelete = () => {
    setIsDeleting(true);
  };

  const handleStopDelete = () => {
    setIsDeleting(false);
  };

  const handleDeleteEvent = () => {
    mutate();
  };

  let content = null;

  if (isFetchingPending) {
    content = (
      <div id="event-details-content" className="center">
        <p>Fetching event data...</p>
      </div>
    );
  }

  if (isFetchingError) {
    content = content = (
      <div id="event-details-content" className="center">
        <ErrorBlock
          title="An error occurred"
          message={
            fetchingError.info?.message ||
            "Failed to fetch event details data. Please try again later."
          }
        />
      </div>
    );
  }

  if (data) {
    const { title, image, location, date, time, description } = data;

    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    content = (
      <>
        <header>
          <h1>{title}</h1>
          {isDeletingPending && "Deleting..."}
          {!isDeletingPending && (
            <nav>
              <button onClick={handleStartDelete}>Delete</button>
              <Link to="edit">Edit</Link>
            </nav>
          )}
        </header>
        <div id="event-details-content">
          <img src={`http://localhost:3000/${image}`} alt={title} />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{location}</p>
              <time dateTime={`Todo-DateT$Todo-Time`}>
                {formattedDate} @ {time}
              </time>
            </div>
            <p id="event-details-description">{description}</p>
          </div>
          {content}
        </div>
      </>
    );
  }

  return (
    <>
      {isDeleting && (
        <Modal onClose={handleStopDelete}>
          <h2>Are you sure?</h2>
          <p>Do you want to delete this event? Thisaction cannot be undone.</p>
          <div className="form-actions">
            {isDeletingPending && <p>Deleting, please wait...</p>}
            {!isDeletingPending && (
              <>
                <button onClick={handleStopDelete} className="button-text">
                  Cancel
                </button>
                <button onClick={handleDeleteEvent} className="button">
                  Delete
                </button>
              </>
            )}
          </div>
          {isDeletingError && (
            <ErrorBlock
              title="Failed to delete event."
              message={
                deletingError.info?.message ||
                "Failed to delete event, please try again later."
              }
            />
          )}
        </Modal>
      )}
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">{content}</article>
    </>
  );
}

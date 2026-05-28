import React, { Suspense } from "react";
import { Await, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "./../components/EventItem";
import EventsList from "../components/EventsList";
import {getAuthToken} from "./../utils/auth"
const EventDetailPage = () => {
  const { event, events } = useRouteLoaderData("event-detail");
  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
};

export default EventDetailPage;

const loadEvent = async (id) => {
  const response = await fetch(`http://localhost:8080/events/${id}`);
  if (!response.ok) {
    throw new Response(
      JSON.stringify({
        message: "Could not fetch detailes for selected event.",
      }),
      {
        status: response.status,
      },
    );
  } else {
    const resData = await response.json();
    return resData.event;
  }
};

const loadEvents = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    //1.
    // return { isError: true, message: "Could not fetch events." };

    // 2.
    // throw json({message: "Could not fetch events."} , {
    //   status : 500
    // })

    // 3.
    throw json(
      { message: "Could not fetch events." },
      {
        status: response.status,
      },
    );
  } else {
    const resData = await response.json();
    return resData.events;
  }
};

export const loader = async ({ request, params }) => {
  const id = params.eventId;
  return {
    event: await loadEvent(id),
    events: loadEvents(),
  };
};
export const action = async ({ request, params }) => {
  const eventId = params.eventId;
  const token = getAuthToken()


  const response = await fetch(`http://localhost:8080/events/${eventId}`, {
    method: request.method,
    headers : {
      "Authorization" : `Bearer ${token}`
    }
  });
  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not delete event." }), {
      status: response.status,
    });
  } else {
    return redirect("/events");
  }
};

import { Suspense } from "react";
import EventsList from "../components/EventsList";
import { Await, useLoaderData } from "react-router-dom";
function EventsPage() {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => {
          return <EventsList events={loadedEvents} />;
        }}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

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
throw new Response(
  JSON.stringify({ message: "Could not fetch events." }),
  { status: response.status }
);
  } else {
    const resData = await response.json();
    return resData.events;
  }
};

export const loader = async () => {
  return {
    events: loadEvents(),
  };
};

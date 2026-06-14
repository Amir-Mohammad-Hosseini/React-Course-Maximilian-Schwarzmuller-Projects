import { useRouter } from "next/router";
import NewMeetupForm from "./../../components/meetups/NewMeetupForm";
import Head from "next/head";
const NewMeetupPage = () => {
  const router = useRouter();

  const handleAddMeetup = async (enteredMeetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.log("API error:", errorText);
      return;
    }

    const data = await response.json();
    console.log(data);

    router.push("/");
  };
  return (
    <>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name="description"
          content="Add you own meetups and create amazing networking opportunities."
        />
      </Head>
      <NewMeetupForm onAddMeetup={handleAddMeetup} />
    </>
  );
};

export default NewMeetupPage;

import { MongoClient } from "mongodb";
import MeetupList from "./../components/meetups/MeetupList";
import Head from "next/head";

const HomePage = ({ meetups }) => {
  return <>
  <Head>
    <title>React Meetups</title>
    <meta name="description" content="Browse a huge list of highly active React meetups!" />
  </Head>
  <MeetupList meetups={meetups} />
  </>
};

export default HomePage;

// export const getServerSideProps = async (context) => {
//   const req = context.req
//   const res = context.res

//   return {
//     props: {
//       meetups : DUMMY_MEETUPS
//     }
//   }
// }

export const getStaticProps = async () => {
  //fetch data from an API
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();

  const db = client.db("meetups");
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
      })),
    },
    revalidate: 10,
  };
};

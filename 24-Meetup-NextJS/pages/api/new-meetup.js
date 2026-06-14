import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const client = new MongoClient(process.env.MONGODB_URI);

  try {
    console.log(process.env.MONGODB_URI);
    await client.connect();

    const db = client.db("meetups");
    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(req.body);

    return res.status(201).json({
      message: "Meetup inserted!",
      insertedId: result.insertedId,
    });
  } catch (error) {
    console.error("MongoDB error:", error);
    return res.status(500).json({
      message: "Failed to connect or insert meetup",
    });
  } finally {
    await client.close();
  }
};

export default handler;
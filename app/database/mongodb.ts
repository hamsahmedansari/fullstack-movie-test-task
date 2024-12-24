import { MongoClient } from "mongodb";

const connectDB = async () => {
  try {
    const client = new MongoClient(process.env.MONGODB_URI!);
    await client.connect();
    console.log(`MongoDB Connected: ${client.db().databaseName}`);
    return client;
  } catch (error) {
    console.error(`Error: ${(error as Error).message}`);
    process.exit(1);
  }
};

export default connectDB;

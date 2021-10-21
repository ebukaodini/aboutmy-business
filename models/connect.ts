import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connect(process.env.MONGODB_CONNECTION_URI, { dbName: 'business' })
  .then(() => {
    console.log(`Connected to MongoDB : ${mongoose.connection.name}`);
  })
  .catch(err => {
    console.log(err.message);
  });
}

const disconnectDB = () => {
  // NOTE: this closes the connection completely. bad.
  // mongoose.connection.close(true, () => {
  //   console.log(`Disconnect from MongoDB`);
  // });
}

export { connectDB, disconnectDB }
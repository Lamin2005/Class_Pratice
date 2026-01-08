import mongoose from "mongoose";

const connectionDB = async () => {
  try {
    const db = await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`);

    console.log("DB connected successfully...", db.connection.host);
    
  } catch (error) {
    console.log("DB ERROR " , error);
    process.exit(1);
  }
};

export default connectionDB;

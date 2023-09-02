import mongoose from "mongoose";

const connect = async () => {
   try {
      await mongoose.connect(process.env.MONGO);
   } catch (err) {
      throw new Error("Couldn't connect to Mongo")
   }
}
export default connect 
import mongoose from "mongoose";
export default function dbConfig() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  mongoose
    .connect(
      "mongodb+srv://garvthad:123Gaurav@cluster0.yl7bq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
      console.log("Connected to DB!!");
    })
    .catch((err) => {
      console.log(err);
    });
}
// already connection - readyState : >=1
//

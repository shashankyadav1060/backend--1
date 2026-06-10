import express from "express";
import connectDB from "./db/index.js";

const app = express();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
  });

/*
const app = express()

( async () => {
    try {
       await mongoose.connect('${process.env.MONGODB_URL}')
       app.on("error", (error) =>{
        console.log("ERRR: ",error);
        throw error
       })
       
       app.listen(process.env.PORT, () => {
        console.log('App is listening on port ${process.env.PORT}');
       })
    }
    catch (error){
        console.error("ERROR: ",error)
        throw err
    }
    
    
})()
*/
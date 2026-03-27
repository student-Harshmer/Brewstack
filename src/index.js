import dotenv from "dotenv";
import connectDB from "./db/index.js"

dotenv.config({
    path: './env'
})

connectDB();

// const app = express();
// const port = process.env.PORT;

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.error("Error", error);
//             throw error;
//         })

//         app.listen(port, () => {
//             console.log("App is listening on port", port)
//         })
//     } catch (error) {
//         console.error("DB connection error", error);
//         throw error;
//     }
// })()
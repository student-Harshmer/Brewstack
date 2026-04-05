import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './env'
})

const port = process.env.PORT || 5000;

connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log("Server is serving on port", port);
        })

        app.get("/", (req, res) => {
            res.json({id: 1})
        })
    })
    .catch((err) => {
        console.error("DB connection failed !", err);
    })

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
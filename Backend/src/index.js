import dotenv from 'dotenv';
dotenv.config({ path: '/.env' });
import connectDB from "./db/index.js";
import { app } from './app.js';

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port : ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log("MONGO db connection failed !!!", err);
    })









// const app = express()

//     // IIFEs are also referred to as Self-Executing Anonymous Functions
//     (async () => {
//         try {
//             await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//             app.on("error", (error) => {
//                 console.log("ERROR:", error)
//                 throw error
//             })

//             app.listen(process.env.PORT,()=>{
//                 console.log(`Server is running on port ${process.env.PORT}`)
//             })
//         } catch (error) {
//             console.log("ERROR:", error)
//             throw err
//         }
//     })()    
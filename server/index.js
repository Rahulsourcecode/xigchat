import Express from "express"
import { configDotenv } from "dotenv"
import { connection } from "./configs/dbConfig.js"
configDotenv()
const PORT = process.env.PORT
const app = Express()
connection()
    .then(() => console.log(`database connected`))
    .catch((err) => console.log(`coudnt connect to db error => ${err}`))
app.listen(PORT, async () => console.log(`server running on port ${PORT}`)) 
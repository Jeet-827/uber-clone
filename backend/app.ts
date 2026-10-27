import express from 'express'
import dotenv from 'dotenv'
import connectdb from './config/Mongodb.config.js'
import cookieParser from 'cookie-parser'
import AuthRouter from './Routes/Auth.route.js'
import { RedishConnect } from './config/Redish.config.js'
const app = express()
dotenv.config()
connectdb()
RedishConnect()
app.use(cookieParser())


app.use('/api/v1/auth', AuthRouter)
const port: number = Number(process.env.PORT)
app.listen(port, () => {
    console.log("the servre is running...")
})
import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import cookieParser from 'cookie-parser'

dotenv.config()

const port = process.env.PORT || 5000
connectDB()

const app = express()

app.get('/', (req, res) => res.send('API running'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))

// Part 2 React Front UI
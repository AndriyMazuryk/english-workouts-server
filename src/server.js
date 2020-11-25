import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import config from './config'
import userRoute from './routes/userRoute'

dotenv.config()

const mongodbUrl = config.MONGODB_URL
mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).catch(error => console.log(error.reason))

const app = express()
app.use(bodyParser.json())

app.use('/api/users', userRoute)

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`))

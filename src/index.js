import express from 'express'
import mongoose from "mongoose";
import router from './routes.js'
import fileUpload from 'express-fileupload'
const _URL = 'mongodb+srv://Festina:lostmineofphandelver@haleradev.clujbpt.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(fileUpload({}))
app.use('/api', router)




async function startApp() {
    try {
        await mongoose.connect(_URL)
        app.listen(PORT, () => console.log('Sever started on port ' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()
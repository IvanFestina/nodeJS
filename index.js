import express from 'express'
import router from './routes.js'
import Pool from 'pg-pool'

const _URL = 'postgres://kflzyztprnyred:f87171848dd2560b0bccbb317e1a1081a90f34191955af73e1149b54193b57e5@ec2-176-34-215-248.eu-west-1.compute.amazonaws.com:5432/d3ed9leim19ndf'
export const pool = new Pool({
    connectionString: _URL,
    sll: {
        rejectUnauthorized: false
    }
})

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use('/api', router)

app.post('/post', (req, res) => {
    // console.log(req.query)
    console.log(req.body)
    res.status(200).json('Server is working')
})

async function startApp() {
    try {
        app.listen(PORT, () => console.log('Sever started on port ' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()
import express from 'express'
import routes from './routes/index.js';


const app = express()
app.use(cors())

export default app.use(
    express.urlencoded({
        extended: true
    })
);
routes(app);


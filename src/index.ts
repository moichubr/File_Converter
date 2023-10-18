import express from 'express';
import routes from './routes/index';


const app = express()
app.use(express.json())
const PORT= 3000


app.use('/api', routes);
app.use('*', (_req, res) => {
    res.status(404).json({error: "Oops! Not found"})
})

app.listen(PORT, () => {
    console.log('Server raised on port', PORT)
})
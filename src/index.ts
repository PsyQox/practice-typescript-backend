import express from 'express'
import diaryRouter from './routes/diaries'

const app = express()

app.use(express.json())

const PORT = 3001

app.get('/ping', (_req, res)=>{
    console.log("Prueba");
    res.send("<h1>Hola</h1>")
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT,()=>{
    console.log(`Server ON! ${PORT}`); 
})
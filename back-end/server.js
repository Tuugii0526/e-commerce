import express from "express"
import dotenv from "dotenv"
import {neon} from '@neondatabase/serverless'
dotenv.config()
const port =8888
const app=express()
app.use(express.json())
const sql=neon(`${process.env.DATABASE_URL}`)
app.get('/',async(req,res)=>{
    try {
        const data= await sql`SELECT * FROM product_one`
        res.json({data})
    } catch (error) {
        
    }
})
app.listen(port,()=>{
    console.log(`server started working at : http://localhost:${port}`)
})


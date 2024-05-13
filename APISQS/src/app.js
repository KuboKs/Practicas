import express from 'express';
import productRoutes from './routes/product-routes.js'
import cors from 'cors'
const app= express()
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(productRoutes)

export default app
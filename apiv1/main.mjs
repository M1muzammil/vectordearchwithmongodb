import express from 'express';
let router = express.Router()
//mmvm
import postRouter from './routes/product.mjs'
import authRouter from './routes/auth.mjs'
router.use(postRouter)
router.use(authRouter)


export default router
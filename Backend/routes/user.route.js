import express from 'express'
import { Login, register } from '../controllers/user.controller.js'
const router = express.Router()
router.post('/register' , register)
router.post('/Login' , Login)
export default router ;
import express from 'express'
import { logout, register ,login } from '../controllers/user.controller.js'

const router = express.Router()

router.post("/register" , register)
router.post("/login",login)
router.post("/logout" , logout)


export default router;
import express from 'express'
import {getBook} from '../controllers/book.controller.js'
const router = express.Router()
router.get("/getBook" , getBook)
export default router;
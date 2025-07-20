import express from 'express'
import {AddBook, getBook} from '../controllers/book.controller.js'
const router = express.Router()
router.get("/getBook" , getBook)
router.post("/addbook" , AddBook)
export default router;
import Book from "../models/book.model.js"

export const getBook = async(req , res) => {
    try{
        const book = Book.find()
        res.status(200).json({
            success:true,
            message:"Books found", 
            book
        })
    }   
    catch(error){
        res.status(500).json({
            success:false,
            message:"Internal Server error"
        })
    }
}
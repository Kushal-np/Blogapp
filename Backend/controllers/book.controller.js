import Book from "../models/book.model.js"

export const getBook = async(req , res) => {
    try{
        const book = await Book.find()
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

export const AddBook = async(req,res) =>{
    try{
        const {name,price,category,image,title} = req.body;
        const newBook = await Book.create({name,price,category,image,title});
        res.status(200).json({
            success:true,
            message:"Added the books successfully",
            data: newBook

        })
    }
    catch(error){
        res.status(401).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}
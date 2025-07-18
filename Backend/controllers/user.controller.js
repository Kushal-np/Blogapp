export const register = async(req , res) =>{
    try{
        const {firstName, lastName , email, password} = req.body
        if(!firstName || !lastName || !email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields required"
            })
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(!emailRegex.test(email)){
            return res.status(400).json({
                success:false,
                message:"Invalid email"
            })
        }
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }
}
import User from '../config/db.js'; // Make sure this is your User **Model**, not DB config
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Helper function to generate token
function generateToken(userId) {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET_KEY, {
        expiresIn: "7d"
    });
}

// REGISTER CONTROLLER
export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        //  Input validation
        if (!username || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please provide username, email, and password"
            });
        }

        //  Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "User already exists"
            });
        }

        //  Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        //  Create and save new user
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword
        });

        //  Generate JWT
        const token = generateToken(newUser._id);

        //  Send token as HTTP-only cookie
        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "Lax",
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });

        // Return user info
        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: {
                id: newUser._id,
                username: newUser.username,
                email: newUser.email
            }
        });
    } catch (error) {
        console.error("Registration error:", error.message);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await User.findOne({ email })
        if (!existingUser) {
            return res.status(401).json({
                success: false,
                message: "User not found"
            })
        }
        const isMatch = await bcrypt.compare(password, existingUser.password.password)
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid Credentials"
            })
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });
        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "Lax",
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });
        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: {
                id: existingUser._id,
                username: existingUser.username,
                email: existingUser.email
            }
        });
    }
    
    catch (error) {
            return res.status(500).json({
                success: false,
                message: "Internal server error"
            })
        }
    }
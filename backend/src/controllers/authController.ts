import {Request,Response} from 'express'
import User from '../models/User'
// import comparePasswords from '../utils/comparePasswords';
import jwtGenerate from '../utils/jwtGenerator';

const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const login = async (req:Request,res:Response) => {
    const {email, password} = req.body

    // validations
    if(!email || !password) {
        const error = new Error("Missing values")
        return res.status(400).json({msg: error.message})
    }
    if(!expression.test(email)){
        const error = new Error("Invalid email format")
        return res.status(400).json({msg: error.message})
    }
    
    try{
        const existsuser = await User.findOne({email}).select("-googleId")
        console.log(existsuser)
        if(!existsuser){
            const error = new Error("User not exists")
            return res.status(400).json({msg: error.message}) 
        }
        if(!(await existsuser.comparePassword(password))){
            const error = new Error("Invalid password")
            return res.status(400).json({msg: error.message}) 
        }
        const jwt = jwtGenerate(existsuser._id.toString(), existsuser.isAdmin)
        const resp = {
            username: existsuser.username,
            email: existsuser.email,
            admin: existsuser.isAdmin,
            status: existsuser.status,
            apt: existsuser.apt,
            token: jwt
        }
        return res.status(200).json(resp)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})
    }
}

export const register = async (req:Request,res:Response) => {
    const {username, email, password} = req.body

    // validations
    if(!username || !email || !password) {
        const error = new Error("Missing values")
        return res.status(400).json({msg: error.message})
    }
    if(!expression.test(email)){
        const error = new Error("Invalid email format")
        return res.status(400).json({msg: error.message})
    }

    try{
        const user = await User.findOne({email})
        if(user){
            const error = new Error("Email in use")
            return res.status(400).json({msg: error.message})
        }
        const newUser = new User({username, email, password})
        await newUser.save()
        return res.status(201).json({msg:"User created"})
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})
    }
}
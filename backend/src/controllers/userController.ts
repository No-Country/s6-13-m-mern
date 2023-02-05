import {Request,Response} from 'express'
import User from '../models/User'

export const getUser =async (req:Request,res:Response) => {
    const {id} = req.params
    if(!id){
        const error = new Error("Empty id")
        return res.status(400).json({msg: error.message})
    }
    
    try{
        const user = await User.findById(id)
        if(!user){
            const error = new Error("User not found")
            return res.status(400).json({msg: error.message})
        }
        return res.json(user)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})
    }
}
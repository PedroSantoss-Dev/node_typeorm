import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { userRepository } from "../repositories/userRepository";


export class ReadUsersController {
   async read(req:Request, res:Response){

    try {
        const users = await userRepository.find()
        return res.status(200).json(users)
    } catch (error) {
        return res.status(400).json(error)
    }
    }
}
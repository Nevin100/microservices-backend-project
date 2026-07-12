import type {Request, Response} from "express";
import logger from "../Utils/logger";

export const register = async (req : Request, res:Response) => {
    try {
        
    } catch (error) {
        logger.error("Error Occured in login Controller");
        res.status(500).json({message: "Internal Server Errro Occured in Login", error: true, success: false});
    }
}

export const login = async (req : Request, res:Response) => {
    try {
        
    } catch (error) {
        logger.error("Error Occured in login Controller");
        res.status(500).json({message: "Internal Server Errro Occured in Login", error: true, success: false});
    }
}
import { Document } from "mongoose"

export interface UserModelSchema extends Document {
    userName: string,
    email: string,
    password: string,
    createdAt : Date,
    UpdatedAt : Date,
    comparePassword(candidatePassword : string) : Promise<boolean>;
}
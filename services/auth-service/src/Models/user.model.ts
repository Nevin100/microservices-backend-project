import mongoose from "mongoose";
import argon2 from "argon2";
import {UserModelSchema} from '../Utils/interfaces'; 

const userSchema = new mongoose.Schema<UserModelSchema>({
    userName: {
        type: String,
        unique: true,
        maxLength: 20,
        minLength: 5,
        trim: true,
        required: true
    },

    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim : true
    },

    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

userSchema.statics.createUser = async function(data) {
    const hashedPassword = await argon2.hash(data.password);
    return this.create({ ...data, password: hashedPassword });
};

userSchema.methods.comparePassword = async function(candidatePassword : string): Promise<boolean> {
    try{
        return await argon2.verify(this.password, candidatePassword);
    }catch(error : any){
        throw error;
    }
};

userSchema.index({userName : 'text'});

const User: mongoose.Model<UserModelSchema> = mongoose.model<UserModelSchema>('User', userSchema);

export default User;


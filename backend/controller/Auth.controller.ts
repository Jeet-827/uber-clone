import { Request, Response } from "express";
import userModel from "../Model/userSchema.Model.js";
import bcrypt from "bcrypt";
import { GenrateAccessToken, GenrateRefreshToken } from '../utils/GenrateToken.js';

export const RegisteUser = async (req: Request, res: Response) => {
    try {
        const { username, email, password } = req.body;

        const Checkemail = await userModel.findOne({ email });

        if (Checkemail) {
            res.status(409).json({
                message: "The user already exists"
            });
            return;
        }

        const hash: string = await bcrypt.hash(password, 10);

        const user = await userModel.create({
            username,
            email,
            password: hash
        });
        const userId: string = user._id.toString();

        const accessToken = GenrateAccessToken(userId);
        const refreshToken = GenrateRefreshToken(userId);
        res.cookie('refreshtoken', refreshToken)
        return res.status(201).json({
            message: "User registered successfully",
            user,
            accessToken
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Internal server error"
        });
    }
}
export const LoginUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const user = await userModel.findOne({ email }).select("+password");
        
        if (!user || !user.password) {
            return res.status(401).json({
                message: "Invalid email or password",
            });
        }

        const isPass: boolean = await bcrypt.compare(password, user.password);
        if (!isPass) {
            return res.status(401).json({
                message: "Invalid email or password",
            });
        }
        const userId: string = user._id.toString();

        const accessToken = GenrateAccessToken(userId);
        const refreshToken = GenrateRefreshToken(userId);
        res.cookie('refreshtoken', refreshToken);
        res.status(200).json({ message: "User logged in successfully", user, accessToken });

    } catch (error) {
        res.status(500).json({ message: error instanceof Error ? error.message : "Internal server error" });
    }
};

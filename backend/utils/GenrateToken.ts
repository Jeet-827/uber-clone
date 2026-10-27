import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const GenrateAccessToken = (userId: string) => {
    const secret = process.env.ACCESSTOKENSECRATE;
    if (!secret) {
        throw new Error("ACCESSTOKENSECRATE is not defined in environment variables");
    }
    const token = jwt.sign({ id: userId }, secret, { expiresIn: "7m" });
    return token;
}

export const GenrateRefreshToken = (userId: string) => {
    const secret = process.env.ACCESSTOKENSECRATE;
    if (!secret) {
        throw new Error("REFRESHTOKENSECRATE is not defined in environment variables");
    }
    const token = jwt.sign({ id: userId }, secret, { expiresIn: "7m" });
    return token;
}
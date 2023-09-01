import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();
const salt = 10;

export default async function handler(req, res) {
    try {
        //Checking whether a user exists with the email address
        let user = await prisma.user.findUnique({ where: { email: req.body.email } });
        if (!user) return res.status(404).send("No User Exists with this email");

        //Check password
        const isCorrect = await bcrypt.compare(req.body.password, user.password)
        if (!isCorrect) return res.status(400).send("Wrong Password");

        res.status(200).json(user);

    } catch (error) {
        res.status(500).send(error.message);
    } finally {
        prisma.$disconnect();
    }
}
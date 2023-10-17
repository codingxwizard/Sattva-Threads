import { PrismaClient } from "@prisma/client";
import bcypt from 'bcrypt';

const prisma = new PrismaClient();
const salt = 10;

export default async function handler(req, res) {
    try {
        //Creating a User
        if (req.method === 'POST') {
            //Checking whether a user exists with the email address
            let user = await prisma.user.findUnique({ where: { email: req.body.email } });
            if (user) return res.status(400).send("User Exists with this email");

            const { email, name, password } = req.body;
            //Hasing password
            const newPassword = await bcypt.hash(password, salt);

            //Stores user credentials to the database
            user = await prisma.user.create({ data: { email, name, password: newPassword } });
            res.status(200).send(user);
        }
    } catch (error) {
        res.status(500).send(error.message);
    } finally {
        prisma.$disconnect();
    }
}
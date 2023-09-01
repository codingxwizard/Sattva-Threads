import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {

    try {
        //Fetching users
        if (req.method === 'GET') {
            const user = await prisma.user.findMany();
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(500).send(error.message);
    } finally {
        await prisma.$disconnect();
    }
}
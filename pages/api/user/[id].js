import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    try {
        if (req.method === "GET") {
            const user = await prisma.user.findUnique({ where: { id: req.query.id } })
            res.status(200).send(user);
        }
    } catch (error) {
        res.status(500).send(error.message);
    } finally {
        await prisma.$disconnect();
    }
}
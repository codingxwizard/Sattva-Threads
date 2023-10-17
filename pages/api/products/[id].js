import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async function handler(req, res) {
    try {
        if (req.method === "GET") {
            const {id} = req.query;
            const products = await prisma.product.findUnique({
                where: {
                    id
                }
            });
            res.status(200).json(products);
        }
    } catch (error) {
        res.status(500).json({ mesg: error.message });
        console.error(error.message)
    } finally {
        await prisma.$disconnect();
    }
}
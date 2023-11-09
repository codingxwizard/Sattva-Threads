import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {

    try {
        //Fetching users
        if (req.method === 'GET') {
            const user = await prisma.user.findUnique({
                where: { id: req.query.id }
            });
            const items = await prisma.product.findMany({
                where: {
                    id: {
                        in: user.cartItems
                    }
                }
            });
            res.status(200).json(items);
        }
        else if (req.method === 'PUT') {
            const user = await prisma.user.findUnique({
                where: {
                    id: req.query.id
                }
            });
            const { id, name, email, cartItems, password } = req.body;
            const updatedData = await prisma.user.update({
                where: {
                    id: id
                },
                data: { name, cartItems, email, password }
            })
            res.status(200).send("Product Added to Cart");
        }
    } catch (error) {
        res.status(500).send(error.message);
    } finally {
        await prisma.$disconnect();
    }
}
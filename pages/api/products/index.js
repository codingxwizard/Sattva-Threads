import { PrismaClient } from "@prisma/client";
import multer from "multer";

const prisma = new PrismaClient();

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '10mb' // Set desired value here
        }
    }
}
// Set up multer configuration to receive images

export default async function handler(req, res) {
    try {
        if (req.method === "GET") {
            const products = await prisma.product.findMany();
            res.status(200).json(products);
        }
        else if (req.method === "POST") {
            const { images, name, desc, offerPrice, mrp, care, type, size } = req.body;
            await prisma.product.create({ data: { images, name, desc, offerPrice: parseInt(offerPrice), mrp: parseInt(mrp), care, type, size } });
            res.status(200).send("Succesfully Stored");
        }
    } catch (error) {
        res.status(500).json({ mesg: error.message });
        console.error(error)
    } finally {
        await prisma.$disconnect();
    }
}
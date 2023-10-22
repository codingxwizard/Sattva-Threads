import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '100mb' // Set desired value here
        }
    },
    responseLimit: false,
}
// Set up multer configuration to receive images

export default async function handler(req, res) {
    try {
        if (req.method === "GET") {
            const backgrounds = await prisma.backgrounds.findMany();
            res.status(200).json(backgrounds);
        }
        else if (req.method === "POST") {
            await prisma.backgrounds.create({ data: { image: req.body.image } });
            res.setHeader('Content-Length', "100mb");
            res.status(200).send("Updated Successfully");
        }

    } catch (error) {
        res.status(500).json({ mesg: error.message });
        console.error(error)
    } finally {
        await prisma.$disconnect();
    }
}
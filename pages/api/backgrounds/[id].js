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
        if (req.method === "DELETE") {
            const { id } = req.query;
            await prisma.backgrounds.delete({
                where: {
                    id
                }
            })
            res.setHeader('Content-Length', "50mb");
            res.status(200).send("Updated Successfully");
        }
        else if (req.method === "PUT") {
            const { id, image } = req.body;
            await prisma.backgrounds.update({
                where: {
                    id
                },
                data: {
                    image
                }
            })
            res.setHeader('Content-Length', "50mb");
            res.status(200).send("Updated Successfully");
        }
    } catch (error) {
        res.status(500).json({ mesg: error.message });
        console.error(error)
    } finally {
        await prisma.$disconnect();
    }
}
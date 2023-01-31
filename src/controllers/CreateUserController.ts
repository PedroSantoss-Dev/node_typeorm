import { userRepository } from './../repositories/userRepository';
import { Request, Response } from 'express';

export class CreateUseController {
    async handle(req: Request, res: Response) {
        const { name, email } = req.body;

        if (!name || !email) {
            return res.status(400).json({ message: 'nome é obrigatorio' });
        }

        try {
            const newUser = userRepository.create({
                name,
                email,
            });
            await userRepository.save(newUser);

            res.status(201).json(newUser);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}

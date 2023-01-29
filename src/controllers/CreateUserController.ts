import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CreateUserService } from '../service/CreateUserService';

class CreateUseController {
    handle(request: Request, response: Response) {
        const createUserService = new CreateUserService();

        const name = request.body.name;
        const email = request.body.email;

        if (name.length === 0 ||  email.length === 0) {
            return response.status(StatusCodes.BAD_REQUEST).json(`erro ao cadastrar`)
        }

        const user = createUserService.execute({ name, email });

        return response.status(StatusCodes.CREATED).json(user);
    }
}

export { CreateUseController };

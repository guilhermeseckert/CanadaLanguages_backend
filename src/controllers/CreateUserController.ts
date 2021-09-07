import { Request, Response } from 'express';
import { CreateUserService } from '../services/CreateUserService';

class CreateUserController {
  async handle(request: Request, response: Response) {
    const {
      name,
      email,
      password,
      country,
      timezone,
      admin,
      avatar,
      about,
      startTime,
      endTime,
    } = request.body;

    const createUserService = new CreateUserService();
    const user = await createUserService.execute({
      name,
      email,
      password,
      country,
      timezone,
      admin,
      avatar,
      about,
      startTime,
      endTime,
    });

    delete user.password;
    return response.json(user);
  }
}

export { CreateUserController };

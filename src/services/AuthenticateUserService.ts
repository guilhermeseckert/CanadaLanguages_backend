import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';
import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';

interface iAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: iAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const user = await usersRepositories.findOne({ email });

    if (!user) {
      throw new Error('Email/password incorrect');
    }

    const passwordMatcch = await compare(password, user.password);

    if (!passwordMatcch) {
      throw new Error('Email/password incorrect');
    }

    const token = sign(
      {
        email: user.email,
      },
      process.env.WEB_TOKEN,
      {
        subject: user.id,
        expiresIn: '1d',
      },
    );

    return token;
  }
}

export { AuthenticateUserService };

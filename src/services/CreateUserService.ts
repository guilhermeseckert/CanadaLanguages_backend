import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';
import { convertToTimeZone } from 'date-fns-timezone';
import { listTimeZones } from 'timezone-support';

interface IUserRequest {
  name: string;
  email: string;
  password: string;
  country: string;
  timezone: string;
  admin?: boolean;
  about?: string;
  avatar?: string;
}

class CreateUserService {
  async execute({
    name,
    email,
    password,
    country,
    timezone,
    admin,
    avatar,
    about,
  }: IUserRequest) {



    // const timeZones = listTimeZones()

    // const date = new Date().toLocaleString("en-US", {timeZone: "America/Vancouver"});
    // const timeZone = 'America/Fortaleza'
    // const zonedDate = convertToTimeZone(date, {timeZone}).toLocaleString("en-US")

    // console.log(date)

    // console.log(zonedDate)

    const userRepository = getCustomRepository(UsersRepositories);

    if (!email) {
      throw new Error('email incorrect');
    }

    const userAlreadyExists = await userRepository.findOne({
      email,
    });

    if (userAlreadyExists) {
      throw new Error('User Already Exists');
    }

    const user = userRepository.create({
      name,
      email,
      password,
      country,
      timezone,
      admin,
      avatar,
      about,
    });

    // await userRepository.save(user)

    //net to save in the database;

    return user;
  }
}

export { CreateUserService };

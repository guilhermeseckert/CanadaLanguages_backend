import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';
import { convertToTimeZone } from 'date-fns-timezone';
import { listTimeZones } from 'timezone-support';
import {hash} from "bcryptjs";


interface IUserRequest {
  name: string;
  email: string;
  password: string;
  country: string;
  timezone: string;
  admin: boolean;
  about?: string;
  avatar?: string;
  startTime: string;
  endTime: string;
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
    startTime,
    endTime
  }: IUserRequest) {



    // const timeZones = listTimeZones()

    // const date = new Date().toLocaleString("en-US", {timeZone: "America/Vancouver"});
    // const timeZone = 'America/Fortaleza'
    // const zonedDate = convertToTimeZone(date, {timeZone}).toLocaleString("en-US")

    // console.log(date)

    // console.log(zonedDate)

    const userRepository = getCustomRepository(UsersRepositories);

    const userAlreadyExists = await userRepository.findOne({
      email,
    });

    if (userAlreadyExists) {
      throw new Error('User Already Exists');
    }

    const passwordHash = await hash(password, 8);

    const user = userRepository.create({
      name,
      email,
      password: passwordHash,
      country,
      timezone,
      admin,
      avatar,
      about,
      startTime,
      endTime,
    });

    await userRepository.save(user)

    return user;
  }
}

export { CreateUserService };

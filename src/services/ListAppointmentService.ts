import { createQueryBuilder, getCustomRepository } from 'typeorm';
import { AppointmentsRepositories } from '../repositories/AppointmentsRepositories';
import { startOfHour, isBefore, getHours, format } from 'date-fns';
import { Appointment } from '../entities/Appointment';

interface IAppointmentRequest {
  id: string;
}

class ListAppointmentService {
  async execute({ id }: IAppointmentRequest) {
    const take = 1;
    const skip = 0;
    const appointmentsRepositories = getCustomRepository(
      AppointmentsRepositories,
    );



    const appointment = appointmentsRepositories.find({

      join: {
        alias: "appointments",
        leftJoinAndSelect : {
          student: "appointments.student",

        }
      },
      take: take,
      skip: skip,
    });


    return appointment;
  }
}

export { ListAppointmentService };

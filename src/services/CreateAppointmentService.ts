import { getCustomRepository } from 'typeorm';
import { AppointmentsRepositories } from '../repositories/AppointmentsRepositories';
import { startOfHour, isBefore, getHours, getDate } from 'date-fns';
import { UsersRepositories } from '../repositories/UsersRepositories';

interface IAppointmentRequest {
  provider_id: string;
  student_id: string;
  date: string;
}

class CreateAppointmentService {
  async execute({ provider_id, student_id, date }: IAppointmentRequest) {
    const appointmentsRepositories = getCustomRepository(
      AppointmentsRepositories,
    );
    const usersRepositories = getCustomRepository(UsersRepositories);

    const provider = await usersRepositories.findOne(provider_id);

    const AppointmentDate = startOfHour(date);

    if (!provider.admin) {
      throw new Error('You cant create an Appointment');
    }

    if (student_id === provider_id) {
      throw new Error('You Can`t create an appointment with yourself ');
    }

    if (getDate(AppointmentDate) === getDate(Date.now())) {
      throw new Error("You can't create one appointment in the same day");
    }

    if (isBefore(AppointmentDate, Date.now())) {
      throw new Error('You can`t Create an appointment on a past date ');
    }

    if (
      getHours(AppointmentDate) < Number(provider.startTime) ||
      getHours(AppointmentDate) > Number(provider.endTime)
    ) {
      throw new Error(
        `You Cant create an Appointment between ${provider.startTime}am and ${provider.endTime}pm `,
      );
    }

    const appointment = appointmentsRepositories.create({
      provider_id,
      student_id,
      date: AppointmentDate,
    });

    // await appointmentsRepositories.save(appointment)

    return appointment;
  }
}

export { CreateAppointmentService };

import { getCustomRepository } from 'typeorm';
import { AppointmentsRepositories } from '../repositories/AppointmentsRepositories';
import { startOfHour } from 'date-fns';

interface IAppointmentRequest {
  provider_id: string;
  student_id: string;
  date: string;
}

class CreateAppointmentService {
  async execute({ provider_id, student_id, date }: IAppointmentRequest) {
    const appointmentsRepositories = getCustomRepository(AppointmentsRepositories);

    const AppointmentDate = startOfHour(date);

    const appointment = appointmentsRepositories.create({
      provider_id,
      student_id,
      date: AppointmentDate
    });

    await appointmentsRepositories.save(appointment)

    return appointment;

  }
}

export { CreateAppointmentService };

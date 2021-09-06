import {Request, Response} from "express"
import { CreateAppointmentService } from "../services/CreateAppointmentService";


class CreateAppointmentController {
  async handle(request: Request, response: Response) {
    const { provider_id, student_id, date} = request.body;

    const createAppointmentController = new CreateAppointmentService();
    const appointment = await createAppointmentController.execute({ provider_id, student_id, date  })
    return response.json(appointment);
  }

}



export {CreateAppointmentController}

import {Request, Response} from "express"
import { ListAppointmentService } from "../services/ListAppointmentService";


class FindAppointmentController {
  async handle(request: Request, response: Response) {
    const { id} = request.body;

    const listAppointmentService = new ListAppointmentService();
    const appointment = await listAppointmentService.execute({ id  })
    return response.json(appointment);
  }

}



export {FindAppointmentController}

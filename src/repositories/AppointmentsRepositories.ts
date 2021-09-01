import {EntityRepository, Repository} from "typeorm"
import {Appointment} from "../entities/Appointment"

@EntityRepository(Appointment)
class AppointmentsRepositories extends Repository<Appointment> {

}

export { AppointmentsRepositories}

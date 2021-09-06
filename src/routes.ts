import {Router} from "express"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import  {CreateUserController } from "./controllers/CreateUserController"
import {CreateAppointmentController} from './controllers/CreateAppointmentController'
import {FindAppointmentController} from './controllers/findAppointmentController';
import {ensureAdmin} from "./middlewares/ensureAdmin";

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const createAppointmentController = new CreateAppointmentController();
const findAppointmentController = new FindAppointmentController();

router.post("/login",authenticateUserController.handle);
router.post("/users", createUserController.handle)
router.post("/appointment", createAppointmentController.handle)
router.get("/appointment", findAppointmentController.handle)


export { router}

import {Router} from "express"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import  {CreateUserController } from "./controllers/CreateUserController"
import {ensureAdmin} from "./middlewares/ensureAdmin";

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

router.post("/login",authenticateUserController.handle);
router.post("/users", createUserController.handle)


export { router}

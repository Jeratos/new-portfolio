import express from "express";
import contact,{project,service} from "../controllers/contact-model.js";
let router = express.Router()


router.route("/contact").post(contact);
router.route("/project").get(project);
router.route("/service").get(service);

export default router;
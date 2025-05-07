import express from "express";
import contact,{project} from "../controllers/contact-model.js";
let router = express.Router()


router.route("/contact").post(contact)
router.route("/project").get(project)


export default router;
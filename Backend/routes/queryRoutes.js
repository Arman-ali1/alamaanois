import {Router} from "express"
import {registerUser,allqueries, login} from "./../controllers/queryController.js"


const router = Router()

router.route("/allqueries").get(allqueries)
router.route("/contactus").post(registerUser)
router.route("/login").post(login)

export default router;
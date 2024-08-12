import {Router} from "express"
import {registerUser,allqueries} from "./../controllers/queryController.js"


const router = Router()

router.route("/allqueries").get(allqueries)
router.route("/contactus").post(registerUser)

export default router;
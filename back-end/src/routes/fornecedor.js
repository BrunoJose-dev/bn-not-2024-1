import {Router} from "express"
import controller from "../controllers/fornecdor.js"

const router = Router()

router.post('/', controller.create)
router.get('/', controller.retrievAll)
router.get('/:id', controller.retrieveOne)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)


export default router
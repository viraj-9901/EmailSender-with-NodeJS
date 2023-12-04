import {Router} from 'express'
// import { emailSender } from './controller/sendEmail.controller.js'
import { emailSender } from '../controllers/emailSender.controller.js'

const router = Router()

router.route('/emailSend').post(emailSender)

export default router
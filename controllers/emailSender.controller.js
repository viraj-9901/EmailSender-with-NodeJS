import { asyncHandler } from "../utils/asyncHandler.js";
import {MailtrapClient} from 'mailtrap'

const Token = process.env.MAILTRAP_API_TOKEN
const sender = process.env.MAILTRAP_SENDER_ADDRESS

const client = new MailtrapClient({token: Token})

const emailSender = asyncHandler (async(req,res) => {
    const {to, subject, message} = req.body
    log('to: ',to)
        // if(!req.body.to) console.log('receiver email address required');

        // const response = await client.send({
        //     from: sender,
        //     to:req.body.to,
        //     subject:req.body.subject,
        //     message:req.body.message
        // })

        // if(response){
        //     res.status(200,"mail successfully send")
        // }else{
        //     res.status(501,"somethinf went wrong, mail doesn't send")
        // }
    
})

// emailSender()

// const emailSender = asyncHandler( async(req,res) => {
//     console.log(req.body);

// })


export {emailSender}
// {
//     "to": "kanviraj9@gmail.com",
//     "subject": "Testing mail",
//     "message": "the power comes in response to a need not a desire, you have to create that need"
// }
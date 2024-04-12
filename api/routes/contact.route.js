import express from 'express'
import { contactForm } from '../controller/contact.controller.js';
import {verifyToken} from '../utils/verifyUser.js'


const router=express.Router();

router.post('/form', verifyToken, contactForm);



export default router;
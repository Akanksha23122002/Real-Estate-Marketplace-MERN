import Contact from "../models/contact.model.js";


export const contactForm=async (req,res,next)=>{
    try {
        const contact=await Contact.create(req.body);
        return res.status(201).json(contact); 
    } catch (error) {
        next(error);
    }
}
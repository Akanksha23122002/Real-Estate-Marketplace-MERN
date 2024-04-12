import mongoose, {Schema} from 'mongoose';

const contactSchema = new Schema({
    fullname:{
        type:String,
        required:[true,"Name is required."],
        trim:true,
        minLength:[2, "Name must be larger than 2 character"],
        maxLength:[50,"Nmae must be larger than 50 characters"],
    },

    phone :{
        type:Number,
        required:[true,"Phone Number is required"],
    },

    email:{
        type:String,
        required:[true,"Email is required."],
        match:[/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,"Invalid email address"]
    },

    property :{
        type:String,
        required:[true,"Property is required"],
    },
    maxPrice :{
        type:Number,
        required:[true,"MaxPrice is required"],
    },

    minimumSize :{
        type:Number,
        required:[true,"MinSize is required"],
    },
    message:{
        type:String,
        required: [true,"Message is required"],

    },


    date:{
        type:Date,
        default:Date.now,
    },
   });
    const Contact = mongoose.model("Contact",contactSchema); 

    export default Contact;
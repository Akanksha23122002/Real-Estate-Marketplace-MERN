import mongoose from 'mongoose';
import mangoose from  'mongoose';

const listingSchema = new mongoose.Schema(
    {
      name:{
        type: String,
        required: true,
      },
      description:{
        type: String,
        required: true,
      },
      address:{
        type: String,
        required: true,
      },
      regularPrice:{
        type: Number,
        required: true,
      },
      discountPrice:{
        type: Number,
        required: true,
      },
      bathrooms:{
        type: Number,
        required: true,
     },
     bedroom:{
        type: Number,
        required: true,
     },
     furnished:{
        type: Boolean,
        required: true,
     },
     parking:{
        type: Boolean,
        required: true,
     },
     types:{
        type: String,
        required: true,
     },
     offer:{
        type: Boolean,
        required: true,
     },
     imageUrls:{
        type: Array,
        required: true,
     },
     userRef:{
        type: String,
        required: true,
     }
    },{timestamps: true}
)


const Listing = mongoose.model('Listing', listingSchema);

export default Listing;
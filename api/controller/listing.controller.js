import Listing from '../routes/listing.route.js';

export const createListing = async (req, res, next) => {
    try{
      const listing = await Listing.create(req.body);
      returnnres.status(201).json(listing);
    }catch (error) {
        next(error);
    }
};
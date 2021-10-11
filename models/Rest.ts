import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Rest = new Schema({
  name: {
    type: String,
    required: [true, 'Please add resturant name'],
    unique: true,
    trim: true,
    maxlength: [50, 'Resturant name can not be more than 50 characters'],
  },
  image: {
    type: String,
    trim: true,
    match: [
      /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/,
      'Please use a valid url',
    ],
    maxlength: [500, 'Image url cant be more than 500 characters'],
    default: '',
  },
  chef: { type: Schema.Types.ObjectId, required: true },
  dishes: [{ type: Schema.Types.ObjectId, ref: 'dish', required: true }],
});

export default mongoose.model('Rest', Rest);

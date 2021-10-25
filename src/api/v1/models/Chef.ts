import { Schema, model } from 'mongoose';

const ChefSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please add chef name'],
    unique: true,
    trim: true,
    maxlength: [50, 'Name can not be more than 50 characters'],
  },
  image: {
    type: String,
    trim: true,
    match: [
      /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/,
      'Please use a valid image url',
    ],
    maxlength: [500, 'Image url cant be more than 500 characters'],
    default: '',
  },
  descr: {
    type: String,
    trim: true,
    maxlength: [500, 'Description can not be more than 500 characters'],
    default: '',
  },
  rests: [{ type: Schema.Types.ObjectId, ref: 'rest', required: true }],
});

export default model('chef', ChefSchema);

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Dish = new Schema({
    name: {
        type: String,
        required: [true, 'Please add dish name'],
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters']
    },
    price: {type:Number, default:0}, 
    ingredients: [ {
        type: String,
        required: [true, 'Please add ingredient'],
        trim: true,
        maxlength: [50, 'Ingredient can not be more than 50 characters']
    } ],
    tags: [ {
        type: String,
        required: [true, 'Please add tag'],
        trim: true,
        maxlength: [50, 'Tag can not be more than 50 characters']
    }],
    resturant: { type: Schema.Types.ObjectId, ref: "rest", required: true }
})

export default mongoose.model('Dish', Dish);
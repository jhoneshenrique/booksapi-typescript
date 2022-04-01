import {model, Schema} from "mongoose";

const bookSchema = new Schema(
    {
    title: {type: String},
    description: {type: String},
    author: {type:String},
    rating: {type: Number}
},
{
    timestamps: true
});

export const BookModel = model("Book",bookSchema);
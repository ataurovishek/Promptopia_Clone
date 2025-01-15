import { Schema, models, model } from "mongoose";



const userSchema = new Schema({
    email: {
        type: String,
        unique: [true, "Email is already taken"],
        required: [true, "Email is Required"],
    },
    username: {
        type: String,
        unique: [true, "Username is already taken"],
        required: [true, "username is required"],
        match:[/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid,it should contain 8-20 alphanumeric characters and be unique"]
    },
    image: {
        type: String,
    }
})

export const User = models.User || model("User",userSchema)

// the models object is provided by the mongoose library and stores all the regstered modelss.

//if a model named "User" is already registered,it will  assign the existing model to the "User" variable.

// this prevents redefined the model and ensure that the existing model is reused

//if a model named "User" doesnot exist in the "models" object the "model" function from mongoose is called to create a new model.
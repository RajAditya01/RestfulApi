const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: "Invalid Email"
        }
    },
    address: {
        type: String,
        required: true,
        minlength: 3
    },
    phoneNumber: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                // You can customize the phone number validation logic here
                // This example uses a basic regex pattern for demonstration
                return /^[0-9]{10}$/.test(value); // Validate a 10-digit phone number
            },
            message: "Invalid Phone Number"
        }
    }
});

//we will create a new collection
const student = mongoose.model("Student", studentSchema);

module.exports= student;

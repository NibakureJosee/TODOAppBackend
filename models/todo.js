const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    id: {
        type: Number
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: pending,
        required: true
    }
})

module.exports = mongoose.model("todo", todoSchema);
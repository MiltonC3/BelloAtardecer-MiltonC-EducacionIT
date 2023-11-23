import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    nombre: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    timestamp: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model('users', userSchema);
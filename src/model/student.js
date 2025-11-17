import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    _id: {type: Number, required: true},
    name: {type: String, required: true},
    password: {type: String, required: true},
    score: {
        type: Object,
        key: String,
        of: Number,
        default: {}
    }},
{
        versionKey: false,  //убирает поле __v
    toJSON: {
            transform: (doc, ret) => {
                ret.id = ret._id; //заменяю _id на id
                delete ret._id; //удаляю старое поле но в базе остается
            }
    }
})

//создаю модель...подключаю схему к коллекции college
const Student = mongoose.model('Student', studentSchema,'college')
export default Student;



import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:string,
        required:true,
        unque:true,
    },
    password:{
        type:string,
        required:true,
    },
    img:{
        type:string,
        required:false,
    },
    country:{
        type:string,
        required:true,
    },
    phone:{
        type:string,
        required:false,
    },
    desc:{
        type:string,
        required:false,
    },
    isSeller:{
        type:boolean,
        default:false,
    },
},{
    timestamps:true
});

export default mongoose.model('User', userSchema)
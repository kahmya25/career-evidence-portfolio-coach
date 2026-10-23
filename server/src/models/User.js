import mongoose from 'mongoose';
const userSchema=new mongoose.Schema({email:{type:String,required:true,unique:true,lowercase:true,trim:true,index:true},passwordHash:{type:String,required:true,select:false},displayName:{type:String,required:true,trim:true,maxlength:100},role:{type:String,enum:['student','mentor','admin'],default:'student',immutable:true},emailVerified:{type:Boolean,default:false},createdAt:{type:Date,default:Date.now}},{timestamps:true});
export default mongoose.model('User',userSchema);

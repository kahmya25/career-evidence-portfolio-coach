import mongoose from 'mongoose';
const evidenceSchema=new mongoose.Schema({ownerId:{type:mongoose.Schema.Types.ObjectId,required:true,index:true,immutable:true,ref:'User'},title:{type:String,required:true,trim:true,maxlength:180},description:{type:String,default:'',maxlength:5000},type:{type:String,enum:['Project','Technical skill','GitHub repository','README','Technical write-up','Portfolio link','Certification','Achievement'],required:true},tags:{type:[String],default:[]},sourceUrl:{type:String,default:''},status:{type:String,enum:['Draft','Needs review','Verified'],default:'Draft'},contribution:{type:String,default:'',maxlength:3000}},{timestamps:true});
evidenceSchema.index({ownerId:1,updatedAt:-1});
export default mongoose.model('Evidence',evidenceSchema);

import mongoose from "mongoose";
import { Schema } from "mongoose";

const UserSchema = new Schema({ 
   //айди пользователя
   id: { 
      type: Number, 
      require: true, 
      unique: true
   },
   //фио пользователя
   name: { 
      type: String, 
      default: "Name"
   },
   //имя аккаунта
   username: { 
      type: String, 
   }, 
   //почта
   email: { 
      type: String,
   }, 
   address: { 
      type: Object,
      require: true, 
      default: 1000
   },
   phone: {
      type: String, 
   },
   website: { 
      type: String, 
   },
   company: { 
      type: Object
   }
} , { 
   timestamps: true
})

export default mongoose.model( 'User' , UserSchema)
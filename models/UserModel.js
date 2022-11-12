import { Schema,model,models } from 'mongoose'

const UserSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true,
    }
});


const UserModel = models.UserModel || model('user_mongoose', UserSchema)

export default UserModel;
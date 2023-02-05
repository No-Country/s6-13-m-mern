import {Schema, model, Document} from "mongoose"
import bcrypt from "bcrypt"

enum EStatus {
    Actived ,
    Disabled
}

export interface IUser extends Document  {
    username: string,
    email: string,
    password: string,
    isAdmin: boolean,
    googleId: string,
    isValidated: boolean,
    status: string,
    token: string,
    apt: string,
    consortium: string[],
    comparePassword: (password: string) => Promise<Boolean>
}

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            trim: true
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        // googleId: {
        //     type: String,
        //     unique: true,
        //     trim: true
        // },
        isValidated: {
            type: Boolean,
            default: false,
        },
        status: {
            type: String,
            enum: EStatus
        },
        token: {
            type: String,
            trim: true,
            default: ""
        },
        apt:{
            type: String,
            trim: true,
            default: ""
        },
        // consortium: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: "Consortium",
        //     default: []
        // }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

userSchema.pre<IUser>("save", async function(next) {  
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next()
  });
  
  userSchema.methods.comparePassword = async function(
    password: string
  ): Promise<Boolean> {
    return await bcrypt.compare(password, this.password);
  };
  
  export default model<IUser>("User", userSchema);
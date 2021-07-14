import mongoose from 'mongoose';

const PlatSchema = new mongoose.Schema({
    name : {
        type : String,
        default: "",
        trim: true,
        lowercase: true,
    },
    cost :{
        type : Number,
        default: 0,
        trim: true,
        validate: value => {
            if(value < 0){
                throw new Error('Le prix du plat ne peut être négatif.')
            }
        }
    },
    category :{
        type : String,
        required : true,
        trim:true,
        lowercase:true,
    },
    carte :{
        type : String,
        required : true,
        trim:true,
        lowercase:true,
    }
});

const PlatModel = mongoose.model('Plat', PlatSchema);

export default PlatModel;
import mongoose from 'mongoose';

const PlatSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true,
        trim: true,
        lowercase: true,
    },
    cost :{
        type : Number,
        default: 0,
        required: true,
        trim: true,
        validate: value => {
            if(value < 0){
                throw new Error('Le prix ne du plat ne peut être négatif.')
            }
        }
    }
});

const PlatModel = mongoose.model('Plat', PlatSchema);

export default PlatModel;
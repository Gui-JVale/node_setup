import { Schema, model } from 'mongoose'

var defaultSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
})

export default model('product', defaultSchema)

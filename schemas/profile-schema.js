const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true,
}

const profileSchema = mongoose.Schema({
  userId: reqString,
  pb: {
    type: Number,
    default: 0,
  },
  trsHistory: {
      type: Array,
  }
})

module.exports = mongoose.model('profiles', profileSchema)
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  salt: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
  }
});

patientSchema.pre('save', async function (next){
  try{
    console.log("called presave");
    const newSalt = await bcrypt.genSalt(10);
    const hashedPasssword = await bcrypt.hash(this.password, newSalt);

    this.salt = newSalt;
    this.password = hashedPasssword;
    next();
  }
  catch(err){
    next(err)
  }
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;

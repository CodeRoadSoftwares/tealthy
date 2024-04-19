const Patient = require("../models/patientModel");

const checkUserExists = async ({ email, username, phoneNumber }) => {
    console.log(email, username, phoneNumber);
    try {
      const user = await Patient.findOne({
        $or: [
          { email },
          { username },
          { phoneNumber },
        ],
      });
      console.log("user: ", user);
      if (user) {
        const existingField = Object.entries(user.toObject()).find(([key, value]) => {
            return [email, username, phoneNumber].includes(value);
        });
        console.log("ef: ",existingField)
        return {
            exists: true,
            field: existingField ? existingField[0] : null,
            value: existingField ? existingField[1] : null,
        };
      } else {
        return {
          exists: false,
          field: null,
          value: null,
        };
      }
    } catch (error) {
      throw new Error('Error checking user existence');
    }
};

module.exports = {checkUserExists};
const zod = require("zod")

const userCheckBody = zod.object({
    username: zod.string().optional(),
    email: zod.string().email().optional()
    
})

const signUpBody = zod.object({
    name: zod.string(),
    username: zod.string(),
    email: zod.string().email(),
    password: zod.string(),
    number: zod.number().refine(
        val => val.toString().length === 10,
        { message: 'Number must have exactly 10 digits' }
    ),
    address: zod.string()
})

module.exports = {userCheckBody, signUpBody};
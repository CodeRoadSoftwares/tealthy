const zod = require("zod")

const userCheckBody = zod.object({
    username: zod.string(),
    email: zod.string().email(),
    number: zod.number()
})

const signUpBody = zod.object({
    name: zod.string(),
    email: zod.string().email(),
    password: zod.string(),
    number: zod.number().max(10).min(10),
    password: zod.string(),
    address: zod.string()
})

module.exports = {userCheckBody, signUpBody};
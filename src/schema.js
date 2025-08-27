import * as z from 'zod'

const userSchema = z.object({
  name: z.string().min(2),
  age: z.number().gte(18),
  isDev: z.boolean(),
})

const user = {
  name: 'Antony',
  age: 25,
  isDev: true
}

const result = userSchema.parse(user)

// function validate(user) {
//   if (typeof user.name !== 'string') {
//     return 'Tipo do name invalido'
//   } else if (typeof user.age !== 'number') {
//     return 'Tipo do age invalido'
//   } else if (typeof user.isDev !== 'boolean') {
//     return 'Tipo do isDev invalido'
//   }

//   return 'Dados válidos'
// }

console.log(result)
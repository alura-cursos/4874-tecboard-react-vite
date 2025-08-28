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

// .refine

const passwordSchema = z.object({
  password: z.string(),
  confirmPassword: z.string(),
}).refine(({password, confirmPassword}) => password === confirmPassword, {
  error: "Senhas não deram match",
  path: ["confirmPassword"]
})

const passwords = {
  password: '1234',
  confirmPassword: '123'
}

const resultPassword = passwordSchema.safeParse(passwords)

if (resultPassword.success) {
  console.log(resultPassword.data)
} else {
  console.log(resultPassword.error.message)
}

// .coercion

const coercionSchema = z.coerce.string()

const resultCoercion = coercionSchema.parse(user.isDev)

console.log({resultCoercion})

// .transform

const transformSchema = z.string().transform((val) => `${val} Lemos`)

const resultTransform = transformSchema.parse(user.name)

console.log({resultTransform})
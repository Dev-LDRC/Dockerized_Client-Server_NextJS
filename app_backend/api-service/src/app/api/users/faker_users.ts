import { faker } from "@faker-js/faker"

interface prop_users {
   name: string,
   email: string
   phone: string
}
const users_length = 25

export const users: prop_users[] = []

for(let i = 0; i < users_length; i++) {

   users.push({
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
   })

}


import { faker } from "@faker-js/faker"

interface prop_vehicles {
   vehicle: string,
   color: string
   fuel: string
}
const vehicles_length = 15

export const vehicles: prop_vehicles[] = []

for(let i = 0; i < vehicles_length; i++) {

   vehicles.push({
      vehicle: faker.vehicle.vehicle(),
      color: faker.vehicle.color(),
      fuel: faker.vehicle.fuel()
   })

}


const { faker } = require('@faker-js/faker')
const _ = require('lodash')

// json-server
module.exports = function () {
  return {
    people: _.times(500, function (n) {
      return {
        id: n,
        firstName: faker.name.firstName(),
        company: faker.company.name(),
        city: faker.address.city(),
        image: faker.image.avatar(),
        email: faker.internet.email(),
        vehicle: faker.vehicle.vehicle()
      }
    })
  }
}

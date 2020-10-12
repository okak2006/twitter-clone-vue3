const {
  sequelize,
  User,
  // other models as needed
} = require('../src/models')

const Promise = require('bluebird')
const users = require('./users.json')
// other seed data as needed

// recreate db with clean data
sequelize.sync({force: true})
  .then(async function () {
    await Promise.all(
      users.map(user => {
        User.create(user)
      })
    )
    // seed other db tables according to other data imported
    // watch for order of seed if there is association
  })

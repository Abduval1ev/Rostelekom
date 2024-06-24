const { faker } = require('@faker-js/faker')

module.exports = {
  async up(db, client) {
    return db.collection('cloth').insertMany([{ test: 'test' }])
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
  },

  async down(db) {
    return db.collection('cloth').updateMany([])
  }
};

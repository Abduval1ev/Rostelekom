module.exports = {
  async up(db, client) {
    
  },

  async down(db) {
    return db.collection('accessories').upDateMany([])
  }
};

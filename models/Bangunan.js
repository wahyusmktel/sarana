const knex = require('../knexfile');
const db = require('knex')(knex.development);

class Bangunan {
  static async create(data) {
    return db('bangunan').insert(data).returning('*');
  }

  static async update(id, data) {
    return db('bangunan').where({ id }).update(data).returning('*');
  }

  static async delete(id) {
    return db('bangunan').where({ id }).del();
  }

  static async findAll(page = 1) {
    const limit = 10;
    const offset = (page - 1) * limit;
    return db('bangunan').select('*').limit(limit).offset(offset);
  }

  static async search(query) {
    return db('bangunan').select('*').where('nama_bangunan', 'ilike', `%${query}%`).limit(10);
  }
}

module.exports = Bangunan;

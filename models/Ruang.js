const knex = require('../knexfile');
const db = require('knex')(knex.development);

class Ruang {
  static async create(data) {
    return db('ruang').insert(data).returning('*');
  }

  static async update(id, data) {
    return db('ruang').where({ id }).update(data).returning('*');
  }

  static async delete(id) {
    return db('ruang').where({ id }).del();
  }

  static async findAll(page = 1) {
    const limit = 10;
    const offset = (page - 1) * limit;
    return db('ruang').select('*').limit(limit).offset(offset);
  }

  static async search(query) {
    return db('ruang').select('*').where('nama_ruang', 'ilike', `%${query}%`).limit(10);
  }
}

module.exports = Ruang;

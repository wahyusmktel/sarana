const knex = require('../knexfile');
const db = require('knex')(knex.development);

class Angkutan {
  static async create(data) {
    return db('angkutan').insert(data).returning('*');
  }

  static async update(id, data) {
    return db('angkutan').where({ id }).update(data).returning('*');
  }

  static async delete(id) {
    return db('angkutan').where({ id }).del();
  }

  static async findAll(page = 1) {
    const limit = 10;
    const offset = (page - 1) * limit;
    return db('angkutan').select('*').limit(limit).offset(offset);
  }

  static async search(query) {
    return db('angkutan').select('*').where('nama', 'ilike', `%${query}%`).limit(10);
  }
}

module.exports = Angkutan;

const knex = require('../knexfile');
const db = require('knex')(knex.development);

class JenisSaranaAngkutan {
  static async create(data) {
    return db('jenis_sarana_angkutan').insert(data).returning('*');
  }

  static async update(id, data) {
    return db('jenis_sarana_angkutan').where({ id }).update(data).returning('*');
  }

  static async delete(id) {
    return db('jenis_sarana_angkutan').where({ id }).del();
  }

  static async findAll(page = 1) {
    const limit = 10;
    const offset = (page - 1) * limit;
    return db('jenis_sarana_angkutan').select('*').limit(limit).offset(offset);
  }

  static async search(query) {
    return db('jenis_sarana_angkutan').select('*').where('nama_jenis_angkutan', 'ilike', `%${query}%`).limit(10);
  }
}

module.exports = JenisSaranaAngkutan;

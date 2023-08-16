const knex = require('../knexfile');
const db = require('knex')(knex.development);

class AsetAlat {
  static async create(data) {
    return db('aset_alat').insert(data).returning('*');
  }

  static async update(id, data) {
    return db('aset_alat').where({ id }).update(data).returning('*');
  }

  static async delete(id) {
    return db('aset_alat').where({ id }).del();
  }

  static async findAll(page = 1) {
    const limit = 10;
    const offset = (page - 1) * limit;
    return db('aset_alat').select('*').limit(limit).offset(offset);
  }

  static async search(query) {
    return db('aset_alat').select('*').where('nama_peralatan', 'ilike', `%${query}%`).limit(10);
  }
}

module.exports = AsetAlat;

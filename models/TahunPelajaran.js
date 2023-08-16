const knex = require('../knexfile');
const db = require('knex')(knex.development);

class TahunPelajaran {
  static async create(data) {
    return db('tahun_pelajaran').insert(data).returning('*');
  }

  static async update(id, data) {
    return db('tahun_pelajaran').where({ id }).update(data).returning('*');
  }

  static async delete(id) {
    return db('tahun_pelajaran').where({ id }).del();
  }

  static async findAll(page = 1) {
    const limit = 10;
    const offset = (page - 1) * limit;
    return db('tahun_pelajaran').select('*').limit(limit).offset(offset);
  }

  static async search(query) {
    return db('tahun_pelajaran').select('*').where('nama_tahun_pelajaran', 'ilike', `%${query}%`).limit(10);
  }
}

module.exports = TahunPelajaran;

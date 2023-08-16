const knex = require('../knexfile');
const db = require('knex')(knex.development);

class KategoriRuang {
  static async create(data) {
    return db('kategori_ruang').insert(data).returning('*');
  }

  static async update(id, data) {
    return db('kategori_ruang').where({ id }).update(data).returning('*');
  }

  static async delete(id) {
    return db('kategori_ruang').where({ id }).del();
  }

  static async findAll(page = 1) {
    const limit = 10;
    const offset = (page - 1) * limit;
    return db('kategori_ruang').select('*').limit(limit).offset(offset);
  }

  static async search(query) {
    return db('kategori_ruang').select('*').where('nama_kategori_ruang', 'ilike', `%${query}%`).limit(10);
  }
}

module.exports = KategoriRuang;

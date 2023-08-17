const knex = require('../knexfile');
const db = require('knex')(knex.development);

class PenerbitBuku {
  static async create(data) {
    return db('penerbit_buku').insert(data).returning('*');
  }

  static async update(id, data) {
    return db('penerbit_buku').where({ id }).update(data).returning('*');
  }

  static async delete(id) {
    return db('penerbit_buku').where({ id }).del();
  }

  static async findAll(page = 1) {
    const limit = 10;
    const offset = (page - 1) * limit;
    return db('penerbit_buku').select('*').limit(limit).offset(offset);
  }

  static async search(query) {
    return db('penerbit_buku').select('*').where('nama_penerbit_buku', 'ilike', `%${query}%`).limit(10);
  }
}

module.exports = PenerbitBuku;

const knex = require('../knexfile');
const db = require('knex')(knex.development);

class Buku {
  static async create(data) {
    return db('buku').insert(data).returning('*');
  }

  static async update(id, data) {
    return db('buku').where({ id }).update(data).returning('*');
  }

  static async delete(id) {
    return db('buku').where({ id }).del();
  }

  static async findAll(page = 1) {
    const limit = 10;
    const offset = (page - 1) * limit;
    return db('buku').select('*').limit(limit).offset(offset);
  }

  static async search(query) {
    return db('buku').select('*').where('judul_buku', 'ilike', `%${query}%`).limit(10);
  }
}

module.exports = Buku;

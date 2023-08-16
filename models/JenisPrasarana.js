const knex = require('../knexfile');
const db = require('knex')(knex.development);

class JenisPrasarana {

  //Show All Data
  static findAll(page = 1) {
    const limit = 10;
    const offset = (page - 1) * limit;
    return db('jenis_prasarana').limit(limit).offset(offset);
  }

  //Search Data
  static search(query) {
    return db('jenis_prasarana').where('nama_jenis_prasarana', 'ilike', `%${query}%`);
  }

  //Create Data
  static create(data) {
    return db('jenis_prasarana').insert(data, ['id']);
  }

  //Update Data
  static update(id, data) {
    return db('jenis_prasarana').where({ id }).update(data).returning('*');
  }

  //Delete Data
  static delete(id) {
    return db('jenis_prasarana').where({ id }).del();
  }

}

module.exports = JenisPrasarana;

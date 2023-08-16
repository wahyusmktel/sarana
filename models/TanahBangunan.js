const knex = require('../knexfile');
const db = require('knex')(knex.development);

class TanahBangunan {
  static create(data) {
    return db('tanah_bangunan').insert(data).returning('*');
  }
  static update(id, data) {
    return db('tanah_bangunan')
      .where({ id })
      .update(data)
      .returning('*');
  }
  static delete(id) {
    return db('tanah_bangunan')
      .where({ id })
      .del();
  }
  static findAll(page = 1) {
    const limit = 10;
    const offset = (page - 1) * limit;

    return db('tanah_bangunan')
      .select('*')
      .limit(limit)
      .offset(offset);
  }
  static search(query) {
    let numberQuery = Number(query);
    let isNumber = !Number.isNaN(numberQuery);
    
    let dbQuery = db('tanah_bangunan')
      .select('*')
      .where('nama_tanah', 'ilike', `%${query}%`);
    
    if (isNumber) {
      dbQuery.orWhere('no_sertifikat_tanah', numberQuery);
    }
    
    return dbQuery.limit(10);
  }
}

module.exports = TanahBangunan;

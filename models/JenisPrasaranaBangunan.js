const knex = require('../knexfile');
const db = require('knex')(knex.development);

class JenisPrasaranaBangunan {
  
  static create(data) {
    return db('jenis_prasarana_bangunan')
      .insert(data)
      .returning('*');
  }

  static update(id, data) {
    return db('jenis_prasarana_bangunan')
      .where({ id })
      .update(data)
      .returning('*');
  }

  static delete(id) {
    return db('jenis_prasarana_bangunan')
      .where({ id })
      .del();
  }

  static findAll(page = 1) {
    const limit = 10;
    const offset = (page - 1) * limit;

    return db('jenis_prasarana_bangunan')
      .select('*')
      .limit(limit)
      .offset(offset);
  }

  static search(query) {
    return db('jenis_prasarana_bangunan')
      .select('*')
      .where('nama_jenis_prasarana_bangunan', 'ilike', `%${query}%`)
      .limit(10);
  }

}

module.exports = JenisPrasaranaBangunan;

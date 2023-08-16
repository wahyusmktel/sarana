/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('tanah_bangunan', table => {      
      table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
      table.uuid('jenis_prasarana_id').references('id').inTable('jenis_prasarana').nullable();
      table.text('nama_tanah').nullable();
      table.integer('no_sertifikat_tanah').nullable();
      table.integer('panjang_tanah').nullable();
      table.integer('lebar_tanah').nullable();
      table.integer('luas_tanah').nullable();
      table.integer('luas_lahan_tersedia').nullable();
      table.enu('kepemilikan', ['Milik', 'Sewa', 'Pinjam', 'Bukan Milik']).nullable();
      table.text('keterangan_tanah').nullable();
      table.text('alamat_jalan_tanah').nullable();
      table.integer('rt_tanah').nullable();
      table.integer('rw_tanah').nullable();
      table.text('nama_dusun_tanah').nullable();
      table.text('desa_kelurahan_tanah').nullable();
      table.text('kecamatan_tanah').nullable();
      table.integer('kode_pos_tanah').nullable();
      table.decimal('lintang_tanah').nullable();
      table.decimal('bujur_tanah').nullable();
    });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('tanah_bangunan');
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('bangunan', table => {
      table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
      table.uuid('jenis_prasarana_bangunan_id').references('id').inTable('jenis_prasarana_bangunan').onDelete('CASCADE');
      table.string('nama_bangunan').notNullable();
      table.float('panjang').nullable();
      table.float('lebar').nullable();
      table.float('luas_tapak_bangunan').nullable();
      table.enu('kepemilikan', ['Milik', 'Sewa', 'Pinjam', 'Bukan Milik']).notNullable();
      table.float('nilai_perolehan_aset').nullable();
      table.integer('jumlah_lantai').nullable();
      table.integer('tahun_dibangun').nullable();
      table.text('keterangan_bangunan').nullable();
      table.date('tanggal_sk_pemakai').nullable();
      table.timestamps(true, true);  // created_at and updated_at
    });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('bangunan');
};

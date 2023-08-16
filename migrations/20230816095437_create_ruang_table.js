/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('ruang', table => {
      table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
      table.uuid('jenis_ruang_id').references('id').inTable('kategori_ruang').onDelete('CASCADE');
      table.uuid('bangunan_id').references('id').inTable('bangunan').onDelete('CASCADE');
      table.string('kode_ruang');
      table.string('nama_ruang');
      table.string('registrasi_ruang');
      table.integer('lantai_ke');
      table.decimal('panjang', 10, 2);
      table.decimal('lebar', 10, 2);
      table.decimal('luas_ruang', 10, 2);
      table.integer('kapasitas');
      table.decimal('luas_plester', 10, 2);
      table.decimal('luas_plafon', 10, 2);
      table.decimal('luas_dinding', 10, 2);
      table.decimal('luas_daun_jendela', 10, 2);
      table.decimal('luas_daun_pintu', 10, 2);
      table.decimal('panjang_kusen', 10, 2);
      table.decimal('luas_tutup_lantai', 10, 2);
      table.decimal('luas_instalasi_listrik', 10, 2);
      table.integer('jumlah_instalasi_listrik');
      table.decimal('panjang_instalasi_air', 10, 2);
      table.integer('jumlah_instalasi_air');
      table.decimal('panjang_drainase', 10, 2);
      table.decimal('luas_finish_struktur', 10, 2);
      table.decimal('luas_finish_plafon', 10, 2);
      table.decimal('luas_finish_dinding', 10, 2);
      table.decimal('luas_finish_kp', 10, 2);
      table.boolean('status').defaultTo(true);
      table.timestamps(true, true); // created_at and updated_at
    });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('ruang');
};
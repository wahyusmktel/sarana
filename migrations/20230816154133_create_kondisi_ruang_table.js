/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('kondisi_ruang', table => {
      table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
      table.uuid('nama_ruang_id').references('id').inTable('ruang').onDelete('CASCADE');
      table.enum('kerusakan', ['Tidak Ada Kerusakan', 'Rusak Ringan', 'Rusak Sedang', 'Rusak Berat']);
      table.integer('nilai_kerusakan');
      table.uuid('tahun_pelajaran_id').references('id').inTable('tahun_pelajaran').onDelete('CASCADE');
      table.boolean('status').defaultTo(true);
      table.timestamps(true, true);
    });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('kondisi_ruang');
  };

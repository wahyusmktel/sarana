/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('kategori_ruang', table => {
      table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
      table.string('nama_kategori_ruang').notNullable();
      table.boolean('status').defaultTo(true);
      table.timestamps(true, true);  // created_at and updated_at
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('kategori_ruang');
};

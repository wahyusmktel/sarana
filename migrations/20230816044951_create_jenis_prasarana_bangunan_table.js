/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('jenis_prasarana_bangunan', (table) => {
      table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
      table.string('nama_jenis_prasarana_bangunan').notNullable();
      table.boolean('status').notNullable().defaultTo(true);
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('jenis_prasarana_bangunan');
};

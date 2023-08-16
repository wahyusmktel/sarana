/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('bangunan', table => {
      table.uuid('tanah_id').references('id').inTable('tanah_bangunan').onDelete('CASCADE');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('bangunan', table => {
      table.dropColumn('tanah_id');
    });
};

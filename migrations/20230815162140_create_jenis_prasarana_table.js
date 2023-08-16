/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const { v4: uuidv4 } = require('uuid');

exports.up = function(knex) {
    return knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"').then(() => {
      return knex.schema.createTable('jenis_prasarana', table => {
        table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
        table.string('nama_jenis_prasarana').notNullable();
        table.boolean('status').notNullable().defaultTo(true);
      });
    });
  };
  

exports.down = function(knex) {
  return knex.schema.dropTable('jenis_prasarana');
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};

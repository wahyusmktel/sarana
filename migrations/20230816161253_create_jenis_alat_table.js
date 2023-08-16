exports.up = function(knex) {
    return knex.schema.createTable('jenis_alat', table => {
      table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
      table.string('nama_alat');
      table.boolean('status').defaultTo(true);
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('jenis_alat');
  };
  
exports.up = function(knex) {
    return knex.schema.createTable('jenis_sarana_angkutan', table => {
      table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
      table.string('nama_jenis_angkutan');
      table.boolean('status').defaultTo(true);
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('jenis_sarana_angkutan');
  };
  
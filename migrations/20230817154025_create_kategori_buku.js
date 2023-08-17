exports.up = function(knex) {
    return knex.schema.createTable('kategori_buku', table => {
      table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
      table.string('nama_kategori_buku').notNullable();
      table.boolean('status').notNullable().defaultTo(true);
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('kategori_buku');
  };
  
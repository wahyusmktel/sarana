exports.up = function(knex) {
    return knex.schema.table('angkutan', table => {
      table.uuid('kategori_alat_id').references('id').inTable('kategori_alat').nullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.table('angkutan', table => {
      table.dropColumn('kategori_alat_id');
    });
  };
  
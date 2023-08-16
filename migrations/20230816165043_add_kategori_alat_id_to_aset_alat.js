exports.up = function(knex) {
    return knex.schema.table('aset_alat', table => {
      table.uuid('kategori_alat_id').references('id').inTable('kategori_alat').onDelete('CASCADE');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.table('aset_alat', table => {
      table.dropColumn('kategori_alat_id');
    });
  };
  
exports.up = function(knex) {
    return knex.schema.table('buku', table => {
      table.uuid('penerbit_buku_id');
      table.foreign('penerbit_buku_id').references('id').inTable('penerbit_buku');
      table.dropColumn('penerbit');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.table('buku', table => {
      table.dropForeign('penerbit_buku_id');
      table.dropColumn('penerbit_buku_id');
      table.string('penerbit');
    });
  };
  
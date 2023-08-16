exports.up = function(knex) {
    return knex.schema.createTable('aset_alat', table => {
      table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
      table.uuid('jenis_sarana_id').references('id').inTable('jenis_alat').onDelete('CASCADE');
      table.uuid('ruang_id').references('id').inTable('ruang').onDelete('CASCADE');
      table.string('nama_peralatan');
      table.string('spesifikasi');
      table.enu('kepemilikan', ['Milik', 'Sewa', 'Pinjam', 'Bukan Milik']);
      table.boolean('status').defaultTo(true);
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('aset_alat');
  };
  
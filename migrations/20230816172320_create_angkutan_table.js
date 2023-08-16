exports.up = function(knex) {
    return knex.schema.createTable('angkutan', table => {
      table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
      table.uuid('jenis_angkutan_id').references('id').inTable('jenis_sarana_angkutan');
      table.uuid('ruang_id').references('id').inTable('ruang');
      table.string('nama');
      table.string('spesifikasi');
      table.string('merk');
      table.string('no_polisi');
      table.string('no_bpkb');
      table.string('alamat');
      table.enu('kepemilikan', ['Milik', 'Sewa', 'Pinjam', 'Bukan Milik']);
      table.boolean('status').defaultTo(true);
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('angkutan');
  };
  
exports.up = function(knex) {
    return knex.schema.createTable('buku', table => {
      table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
      table.uuid('ruang_id').references('id').inTable('ruang');
      table.uuid('kategori_buku_id').references('id').inTable('kategori_buku');
      table.uuid('kategori_alat_id').references('id').inTable('kategori_alat');
      table.string('judul_buku').notNullable();
      table.integer('jumlah_halaman').notNullable();
      table.date('tanggal_terbit').notNullable();
      table.string('isbn').unique();
      table.string('penerbit').notNullable();
      table.string('pengarang').notNullable();
      table.enum('bahasa_buku', ['Bahasa Indonesia', 'Bahasa Inggris', 'Bahasa Arab', 'Bahasa Jawa', 'Bahasa Sunda', 'Lainnya']).notNullable();
      table.text('keterangan_buku');
      table.boolean('status').notNullable().defaultTo(true);
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('buku');
  };
  
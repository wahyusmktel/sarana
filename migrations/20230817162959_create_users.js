exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
      table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
      table.string('nama').notNullable();
      table.string('email').notNullable().unique();
      table.string('password').notNullable();
      table.boolean('status').notNullable().defaultTo(true);
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('users');
  };
  
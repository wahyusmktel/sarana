exports.up = function(knex) {
    return knex.schema.createTable('user_roles', table => {
      table.uuid('user_id').references('id').inTable('users').onDelete('CASCADE');
      table.uuid('role_id').references('id').inTable('roles').onDelete('CASCADE');
      table.primary(['user_id', 'role_id']);
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('user_roles');
  };
  
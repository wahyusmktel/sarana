exports.seed = function(knex) {
  return knex('roles').del()
    .then(function () {
      return knex('roles').insert([
        {name: 'Super Admin'},
        {name: 'Operator'},
        {name: 'User'}
      ]);
    });
};

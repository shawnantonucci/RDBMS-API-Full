
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts').del()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        { name: 'FSW1'},
        { name: 'FSW2'},
        { name: 'FSW3'},
      ]);
    });
};

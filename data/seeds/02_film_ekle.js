/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('film').del()
  await knex('film').insert([
    {id: 1, isim: 'Tosun Paşa'},
    {id: 2, isim: 'Banker Bilo'},
    {id: 3, isim: 'Neşeli Günler'}
  ]);
};

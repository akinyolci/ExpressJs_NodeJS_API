/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('aktor').del()
  await knex('aktor').insert([
    { isim: 'Kemal Sunal'},
    { isim: 'Şener Şen'},
    { isim: 'Adile Naşit'}
  ]);
};

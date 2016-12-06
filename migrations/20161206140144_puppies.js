'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('puppies' , function(table){
    table.increments();
    table.string('name');
    table.integer('age_in_months');
    table.string('breed');
    table.text('image_url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('puppies');
};

// id serial
// name string
// age_in_months integer
// breed string
// image_url text

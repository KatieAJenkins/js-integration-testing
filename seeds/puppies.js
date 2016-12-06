'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('puppies').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('puppies').insert({
          id: 1,
          name: 'Macy',
          age_in_months: 3,
          breed: 'Mutt',
          image_url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ1WpvUlxgf7uO8JI2qgA8iOBjAmdZx7eqegcQCga44_60OSI0FzA'
        }),
        knex('puppies').insert({
          id: 2,
          name: 'Emilee',
          age_in_months: 10,
          breed: 'Collie',
          image_url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTEzE-MY9RxmkEsbnLZMSvPhd8K_QTtRufCdgo9skkIgf53UrQo0g'
        }),
      ]);
    });
};

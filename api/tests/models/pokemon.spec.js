const { Pokemon, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Pokemon model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Pokemon.create({ name: 'Pikachu' });
      });
    describe('image', () => {
      it('should throw an error if img is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a img')))
          .catch(() => done());
      });
      it('should work when its a valid img', () => {
        Pokemon.create({ img: 'http://images6.fanpop.com/image/photos/40400000/IMG-4943-PNG-legendary-pokemon-40407880-2732-1536.png' });
      });
    });
    describe('hp', () => {
      it('should throw an error if hp is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a img')))
          .catch(() => done());
      });
      it('should throw an error if hp is a number < 0', () => {
        Pokemon.create({ hp : -3})
        .then(() => done(new Error('Hp must be a number >0')))
          .catch(() => done());
      });
      it('should work when its a valid number', () => {
        Pokemon.create({ hp : 10})
      });
    });
    });
  });
});

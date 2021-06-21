const request = require('supertest');
const app = require('./index.js');
var expect = require('chai').expect;

describe('test api', function() {

  it('get cart', function(done) {

    request(app)
      .get('/cart')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(response.body[0].sku_id).to.equal(599531);
        done();
      })
      .catch(err => done(err));
  });

  it('post cart', function(done) {

  });

});



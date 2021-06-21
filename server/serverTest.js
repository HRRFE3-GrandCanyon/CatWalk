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

  it('should successfully post to cart and add 1 to quantity', function(done) {

    var itemCountBefore;
    var itemCountAfter;

    request(app)
      .get('/cart')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        itemCountBefore = response.body[0].count;
        return request(app)
          .post('/cart')
          .send({'sku_id': 599531})
          .set('Accept', 'application/json')
          .expect(200);
      })
      .then(() => {
        return request(app)
          .get('/cart')
          .expect('Content-Type', /json/)
          .expect(200);
      })
      .then((response) => {
        itemCountAfter = response.body[0].count;
        expect(itemCountAfter - itemCountBefore).to.equal(1);
        done();
      });

  });

});
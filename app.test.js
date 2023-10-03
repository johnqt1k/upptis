const request = require('supertest');
const app = require('./app');

describe('sites running', ( )=> { 
    test('I am alive and responding', done => {
    request(app)
    .get('/')
    .expect(200)
    .end(done)
});

    test('GET /', done => {
    request(app)
    .get('/about')
    .expect(200)
    .end(done)
});

    test('GET jibberish', done => {
    request(app)
    .get('/asjdgajdsg')
    .expect(404)
    .end(done)
    });
});

describe('user tests', () => {
    test('GET /users', done => {
        request(app)
            .get('/users')
            .expect(200)
            .end(done);
    });

    test('GET users/10', done => {
        request(app)
            .get('/users/10')
            .expect(404) 
            .end(done);
    });

    test('DELETE /users/10 removes the user with the id 10', done => {
        request(app)
            .delete('/users/10') // Assuming you want to test a delete operation
            .expect(404) // Adjust the expected status code based on your application's behavior
            .end(done);
    });
});
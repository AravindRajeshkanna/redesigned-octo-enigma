const request = require('supertest');
const app = require('../src/index');

describe('API Endpoints', () => {
    it('should return API health', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('status', 'API is healthy');
    });

    it('should return sample data', async () => {
        const res = await request(app).get('/api/data');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Here is your data!');
    });
});

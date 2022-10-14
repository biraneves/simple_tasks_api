describe('Routes: Index', () => {
    describe('GET /', () => {
        it('returs the API status', (done) => {
            request
                .get('/')
                .expect(200)
                .end((err, res) => {
                    const expected = { status: 'Simple Tasks API' };
                    expect(res.body).to.eql(expected);
                    done(err);
                });
        });
    });
});

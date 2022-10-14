describe('Routes: Token', () => {
    const Users = app.models.users;

    describe('POST /token', () => {
        beforeEach(async () => {
            // Código de pré-teste
            // Limpa a base de usuários
            await Users.destroy({ where: {} });

            // Cria um usuário válido para os testes
            await Users.create({
                name: 'John',
                email: 'john@mail.net',
                password: '12345',
            });
        });

        describe('status 200', () => {
            it('returns authenticated user token', (done) => {});
        });

        describe('status 401', () => {
            it('throws error when password is incorrect', (done) => {});

            it('throws error when email not exists', (done) => {});

            it('throws error when fields are blank', (done) => {});
        });
    });
});

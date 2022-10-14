const process = require('process');

module.exports = (app) => {
    const start = async (port) => {
        try {
            await app.db.authenticate();
            await app.db.sync();

            if (process.env.NODE_ENV !== 'test') {
                app.listen(port, () => {
                    console.log(`Simple Tasks API - Port ${port}`);
                });
            }
        } catch (err) {
            console.log('Erro de conexão com o banco de dados.');
            console.log(err);
        }
    };

    start(app.get('port'));
};

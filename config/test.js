const process = require('process');

module.exports = {
    db: {
        database: 'simple_tasks_test',
        username: '',
        password: '',
        params: {
            dialect: 'sqlite',
            storage: 'simple_tasks_test.sqlite',
            logging: false,
            define: {
                underscored: true,
            },
        },
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        options: {
            session: false,
        },
    },
};

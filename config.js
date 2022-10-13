module.exports = {
    db: {
        database: 'simple_tasks',
        username: '',
        password: '',
        params: {
            dialect: 'sqlite',
            storage: 'simple_tasks.sqlite',
            define: {
                underscored: true,
            },
        },
    },
    jwt: {
        secret: 'S1mple-T@$k-AP1',
        options: {
            session: false,
        },
    },
};

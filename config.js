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
};

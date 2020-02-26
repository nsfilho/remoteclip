module.exports = {
    apps: [
        {
            name: 'API',
            script: 'build/index.js',

            // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
            args: '',
            instances: 1,
            autorestart: true,
            watch: false,
            max_memory_restart: '100M',
            env: {
                NODE_ENV: 'development',
            },
            env_production: {
                NODE_ENV: 'production',
            },
        },
    ],
};

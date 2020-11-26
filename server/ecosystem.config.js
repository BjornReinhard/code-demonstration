module.exports = {
    apps : [{
        name: 'Code Demonstration',
        script: './dist/app.js',
        args: 'one two',
        instances: 1,
        autorestart: true,
        watch: false,
        max_restarts: 10,
        env: {
            NODE_ENV: 'development'
        },
        node_args: '--max_old_space_size=8192',
        env_production: {
            NODE_ENV: 'production',
            PORT: 80
        }
    }],
};

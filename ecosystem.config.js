const dev = {
    APP_PORT: 9000,
    NODE_ENV: "dev",
};

module.exports = {
    apps: [
        {
            name: "Test",
            script: "index.js",
            env_dev: dev,
            watch: true,
        },
    ],
};

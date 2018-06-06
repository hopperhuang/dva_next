module.exports = {
  apps: [{
    name: 'next_server',
    script: './server.js',
    exec_mode: 'cluster',
    instances: 'max',
    env_production: {
      NODE_ENV: 'production',
    },
  }],
};


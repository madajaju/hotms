
module.exports = {
    name: '_oi',
    contexts: {
        local: {
            type: 'swarm',
            tag: '_oi_dev',
            design: 'services.js',
            env: {}
        },
        dev: {
            type: 'swarm',
            tag: '_oi_dev',
            design: 'services.js',
            env: {}
        },
        test: {
            type: 'swarm',
            tag: '_oi_test',
            design: 'services.js',
            file: 'docker-compose.yml',
            env: {}
        },
        prod: {
            type: 'swarm',
            tag: '_oi_prod',
            design: 'services.js',
            env: {}
        }
    }
}

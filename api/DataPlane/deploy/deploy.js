
module.exports = {
    name: '_dp',
    contexts: {
        local: {
            type: 'swarm',
            tag: '_dp_dev',
            design: 'services.js',
            env: {}
        },
        dev: {
            type: 'swarm',
            tag: '_dp_dev',
            design: 'services.js',
            env: {}
        },
        test: {
            type: 'swarm',
            tag: '_dp_test',
            design: 'services.js',
            file: 'docker-compose.yml',
            env: {}
        },
        prod: {
            type: 'swarm',
            tag: '_dp_prod',
            design: 'services.js',
            env: {}
        }
    }
}

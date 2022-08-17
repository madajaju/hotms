
module.exports = {
    name: '_or',
    contexts: {
        local: {
            type: 'swarm',
            tag: '_or_dev',
            design: 'services.js',
            env: {}
        },
        dev: {
            type: 'swarm',
            tag: '_or_dev',
            design: 'services.js',
            env: {}
        },
        test: {
            type: 'swarm',
            tag: '_or_test',
            design: 'services.js',
            file: 'docker-compose.yml',
            env: {}
        },
        prod: {
            type: 'swarm',
            tag: '_or_prod',
            design: 'services.js',
            env: {}
        }
    }
}

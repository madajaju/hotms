
module.exports = {
    name: '_pm',
    contexts: {
        local: {
            type: 'swarm',
            tag: '_pm_dev',
            design: 'services.js',
            env: {}
        },
        dev: {
            type: 'swarm',
            tag: '_pm_dev',
            design: 'services.js',
            env: {}
        },
        test: {
            type: 'swarm',
            tag: '_pm_test',
            design: 'services.js',
            file: 'docker-compose.yml',
            env: {}
        },
        prod: {
            type: 'swarm',
            tag: '_pm_prod',
            design: 'services.js',
            env: {}
        }
    }
}


module.exports = {
    name: '_cp',
    contexts: {
        local: {
            type: 'swarm',
            tag: '_cp_dev',
            design: 'services.js',
            env: {}
        },
        dev: {
            type: 'swarm',
            tag: '_cp_dev',
            design: 'services.js',
            env: {}
        },
        test: {
            type: 'swarm',
            tag: '_cp_test',
            design: 'services.js',
            file: 'docker-compose.yml',
            env: {}
        },
        prod: {
            type: 'swarm',
            tag: '_cp_prod',
            design: 'services.js',
            env: {}
        }
    }
}

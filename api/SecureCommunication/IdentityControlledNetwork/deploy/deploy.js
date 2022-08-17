
module.exports = {
    name: 's_icn',
    contexts: {
        local: {
            type: 'swarm',
            tag: 's_icn_dev',
            design: 'services.js',
            env: {}
        },
        dev: {
            type: 'swarm',
            tag: 's_icn_dev',
            design: 'services.js',
            env: {}
        },
        test: {
            type: 'swarm',
            tag: 's_icn_test',
            design: 'services.js',
            file: 'docker-compose.yml',
            env: {}
        },
        prod: {
            type: 'swarm',
            tag: 's_icn_prod',
            design: 'services.js',
            env: {}
        }
    }
}

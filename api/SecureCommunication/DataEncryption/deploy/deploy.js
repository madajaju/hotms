
module.exports = {
    name: 's_de',
    contexts: {
        local: {
            type: 'swarm',
            tag: 's_de_dev',
            design: 'services.js',
            env: {}
        },
        dev: {
            type: 'swarm',
            tag: 's_de_dev',
            design: 'services.js',
            env: {}
        },
        test: {
            type: 'swarm',
            tag: 's_de_test',
            design: 'services.js',
            file: 'docker-compose.yml',
            env: {}
        },
        prod: {
            type: 'swarm',
            tag: 's_de_prod',
            design: 'services.js',
            env: {}
        }
    }
}

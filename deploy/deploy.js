
module.exports = {
    name: 'hotms',
    contexts: {
        dev: {
            type: 'swarm',
            tag: 'hotms_dev',
            file: 'docker-compose.yml',
            env: {}
        },
        test: {
            type: 'swarm',
            tag: 'hotms_test',
            file: 'docker-compose.yml',
            env: {}
        },
        prod: {
            type: 'swarm',
            tag: 'hotms_prod',
            file: 'docker-compose.yml',
            env: {}
        }
    }
}

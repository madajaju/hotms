
module.exports = {
    name: 's_ddc',
    contexts: {
        local: {
            type: 'swarm',
            tag: 's_ddc_dev',
            design: 'services.js',
            env: {}
        },
        dev: {
            type: 'swarm',
            tag: 's_ddc_dev',
            design: 'services.js',
            env: {}
        },
        test: {
            type: 'swarm',
            tag: 's_ddc_test',
            design: 'services.js',
            file: 'docker-compose.yml',
            env: {}
        },
        prod: {
            type: 'swarm',
            tag: 's_ddc_prod',
            design: 'services.js',
            env: {}
        }
    }
}

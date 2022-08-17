
module.exports = {
    name: '_td',
    contexts: {
        local: {
            type: 'swarm',
            tag: '_td_dev',
            design: 'services.js',
            env: {}
        },
        dev: {
            type: 'swarm',
            tag: '_td_dev',
            design: 'services.js',
            env: {}
        },
        test: {
            type: 'swarm',
            tag: '_td_test',
            design: 'services.js',
            file: 'docker-compose.yml',
            env: {}
        },
        prod: {
            type: 'swarm',
            tag: '_td_prod',
            design: 'services.js',
            env: {}
        }
    }
}

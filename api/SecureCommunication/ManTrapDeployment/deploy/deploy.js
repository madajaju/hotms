
module.exports = {
    name: 's_mtd',
    contexts: {
        local: {
            type: 'swarm',
            tag: 's_mtd_dev',
            design: 'services.js',
            env: {}
        },
        dev: {
            type: 'swarm',
            tag: 's_mtd_dev',
            design: 'services.js',
            env: {}
        },
        test: {
            type: 'swarm',
            tag: 's_mtd_test',
            design: 'services.js',
            file: 'docker-compose.yml',
            env: {}
        },
        prod: {
            type: 'swarm',
            tag: 's_mtd_prod',
            design: 'services.js',
            env: {}
        }
    }
}

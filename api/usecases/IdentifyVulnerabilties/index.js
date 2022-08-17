/**
 * usecase.js
 *
 * @description :: This is a collection of scenarios that are mapped to nodejs machines.
 */

module.exports = {
    name: 'Identify Vulnerabilities',
    description: 'Identify Vulnerabilities focuses on network, host, and access control settings.',
    method: 'data/govern',
    actors: {
        'SecOps': 'uses'
    },
    // Shows dependency
    // includes: ["UseCase Name"],
    // Show Aggreation from a super use case
    // extends: ["UseCase Name"],
};


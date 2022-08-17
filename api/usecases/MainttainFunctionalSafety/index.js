/**
 * usecase.js
 *
 * @description :: This is a collection of scenarios that are mapped to nodejs machines.
 */

module.exports = {
    name: 'Mainttain Functional Safety',
    description: 'Mainttain Functional Safety is the description',
    method: 'data/govern',
    actors: {
        'InfrastructureManager': 'uses'
    },
    // Shows dependency
    // includes: ["UseCase Name"],
    // Show Aggreation from a super use case
    // extends: ["UseCase Name"],
};


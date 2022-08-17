/**
 * usecase.js
 *
 * @description :: This is a collection of scenarios that are mapped to nodejs machines.
 */

module.exports = {
    name: 'Identify Infrastructure',
    description: 'Identify the infrastructure includes noting hardware, software and firmware.',
    method: 'data/govern',
    actors: {
        'OTOps': 'uses',
        'ITOps': 'uses'
    },
    // Shows dependency
    // includes: ["UseCase Name"],
    // Show Aggreation from a super use case
    // extends: ["UseCase Name"],
};


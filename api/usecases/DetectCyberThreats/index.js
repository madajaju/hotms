/**
 * usecase.js
 *
 * @description :: This is a collection of scenarios that are mapped to nodejs machines.
 */

module.exports = {
    name: 'Detect Cyber Threats',
    description: 'Detect Cyber Threats extends traditional IT cyber threat detection techniques.',
    method: 'data/govern',
    actors: {
        'SecOps': 'uses'
    },
    // includes: [ "Re"]
    // Shows dependency
    // includes: ["UseCase Name"],
    // Show Aggreation from a super use case
    // extends: ["UseCase Name"],
};


/**
 * usecase.js
 *
 * @description :: This is a collection of scenarios that are mapped to nodejs machines.
 */

module.exports = {
    name: 'Respond to Events',
    description: 'Respond to Events includes responding to cyber, digital and physical events in the environment.',
    method: 'data/govern',
    actors: {
        'OTOps': 'uses'
    },
    // Shows dependency
    // includes: ["UseCase Name"],
    // Show Aggreation from a super use case
    // extends: ["UseCase Name"],
};


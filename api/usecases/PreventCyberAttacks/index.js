/**
 * usecase.js
 *
 * @description :: This is a collection of scenarios that are mapped to nodejs machines.
 */

module.exports = {
    name: 'Prevent Cyber Attacks',
    description: 'Prevent Cyber Attacks is traditional IT cyber prevention with the addition of specific OT controls.',
    method: 'data/govern',
    actors: {
        'SecOps': 'uses'
    },
    // Shows dependency
    // includes: ["UseCase Name"],
    // Show Aggreation from a super use case
    // extends: ["UseCase Name"],
};


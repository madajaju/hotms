/**
 * usecase.js
 *
 * @description :: This is a collection of scenarios that are mapped to nodejs machines.
 */

module.exports = {
    name: 'Update Infrastructure',
    description: 'Update Infrastructure is similar to traditional IT update infrastructure but includes machines,' +
        ' controllers, devices, firmware,operating systems, and software stacks.',
    method: 'data/govern',
    actors: {
        'Vendor': 'uses',
        'OTOps': 'uses'
    },
    // Shows dependency
    // includes: ["UseCase Name"],
    // Show Aggreation from a super use case
    // extends: ["UseCase Name"],
};


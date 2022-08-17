/**
 * usecase.js
 *
 * @description :: This is a collection of scenarios that are mapped to nodejs machines.
 */

module.exports = {
    name: 'Remediate Risk',
    description: 'Remediate Risk for OT infrastructure is fundamentally different from IT remediation because '
    + 'Functional Safety is a critical factor when analyzing risk.',
    method: 'data/govern',
    actors: {
        'OTOps': 'uses'
    }, // Shows dependency
    // includes: ["Update Infrastructure"],
    // Show Aggreation from a super use case
    // extends: ["UseCase Name"],
};


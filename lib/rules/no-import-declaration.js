"use strict";

module.exports = function(context) {
    return {

        "ImportDeclaration": node => {
          context.report(node, "[ES6] import declaration is forbidden.");
        }

    };
};

module.exports.schema = [];
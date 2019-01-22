"use strict";

module.exports = function(context) {
    return {

        "ClassDeclaration": node => {
          context.report(node, "[ES6] class declaration is forbidden.");
        }

    };
};

module.exports.schema = [];
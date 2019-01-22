"use strict";

module.exports = function(context) {
    return {

        "ExportNamedDeclaration": node => {
          context.report(node, "[ES6] export named declaration is forbidden.");
        }

    };
};

module.exports.schema = [];
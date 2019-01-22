"use strict";

module.exports = function(context) {
    return {

        "ExpressionStatement": node => {
          const obj = node.expression.object;
          if (obj && obj.name === "module") {
            context.report(node, "[ES6] modules are forbidden.");
          }
        }

    };
};

module.exports.schema = [];
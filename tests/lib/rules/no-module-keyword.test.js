"use strict";

var rule = require("../../../lib/rules/no-module-keyword"),
    RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
    }
});

var ruleTester = new RuleTester();
ruleTester.run("no-module-keyword", rule, {

    valid: [
        `function ping () { return null; }`,
        `() => null`,
        `2 + 2 * 3 / 2`,
        `(Math.random() * (100 - 20)) + 20`,
        `functionCall()`,
        `window.history ? useHistory() : noHistoryFallback()`,
        `1+1, 2+2, 3+3`,
        `declaredVariable`,
        `true && functionCall()`,
        `true && declaredVariable`
    ],

    invalid: [
        {
            code: "module.exports;",
            errors: [{
                message: "[ES6] modules are forbidden.",
                type: "ExpressionStatement"
            }]
        }
    ]
});
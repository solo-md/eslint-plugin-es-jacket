"use strict";

var rule = require("../../../lib/rules/no-export-named-declaration"),
    RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
    }
});

var ruleTester = new RuleTester();
ruleTester.run("no-export-named-declaration", rule, {

    valid: [],

    invalid: [
        {
            code: `export const sqrt = Math.sqrt;`,
            errors: [{
                message: "[ES6] export named declaration is forbidden.",
                type: "ExportNamedDeclaration"
            }]
        },
        {
            code: `
                export function square(x) {
                    return x * x;
                }
            `,
            errors: [{
                message: "[ES6] export named declaration is forbidden.",
                type: "ExportNamedDeclaration"
            }]
        }
    ]
});
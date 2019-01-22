"use strict";

var rule = require("../../../lib/rules/no-import-declaration"),
    RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
    }
});

var ruleTester = new RuleTester();
ruleTester.run("no-import-declaration", rule, {

    valid: [],

    invalid: [
        {
            code: `import { map, reduce, somethingElse } from 'underscore'`,
            errors: [{
                message: "[ES6] import declaration is forbidden.",
                type: "ImportDeclaration"
            }]
        },
        {
            code: `import map from 'underscore/map'`,
            errors: [{
                message: "[ES6] import declaration is forbidden.",
                type: "ImportDeclaration"
            }]
        }
    ]
});
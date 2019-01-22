"use strict";

var rule = require("../../../lib/rules/no-class-declaration"),
    RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
    }
});

var ruleTester = new RuleTester();
ruleTester.run("no-class-declaration", rule, {

    valid: [],

    invalid: [
        {
            code: `
                class Point {
                    constructor(x, y) {
                        this.x = x;
                        this.y = y;
                    }
                    toString() {
                        return '(' + this.x + ', ' + this.y + ')';
                    }
                }
            `,
            errors: [{
                message: "[ES6] class declaration is forbidden.",
                type: "ClassDeclaration"
            }]
        },
        {
            code: `
                class ColorPoint extends Point {
                    constructor(x, y, color) {
                        super(x, y);
                        this.color = color;
                    }
                    toString() {
                        return super.toString() + ' in ' + this.color;
                    }
                }
            `,
            errors: [{
                message: "[ES6] class declaration is forbidden.",
                type: "ClassDeclaration"
            }]
        }
    ]
});
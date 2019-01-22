# eslint-plugin-es-jacket

Code restrictions for ES6 and beyond

## Installation (global)

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i -g eslint
```

Next, install `eslint-plugin-es-jacket`:

```
$ npm i -g eslint-plugin-es-jacket
```

**Note:** If you installed the plugin locally (without using the `-g` flag) then your global ESLint will not have access to it.

## Usage

Add `es-jacket` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "es-jacket"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "es-jacket/no-class-declaration": [ "error" ],
        "es-jacket/no-export-named-declaration": [ "error" ],
        "es-jacket/no-import-declaration": [ "error" ],
        "es-jacket/no-module-keyword": [ "error" ],
    }
}
```

## Supported Rules

* no-class-declaration
* no-export-named-declaration
* no-import-declaration
* no-module-keyword






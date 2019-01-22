# eslint-plugin-es-jacket

Code restrictions for ES6 and beyond

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-es-jacket`:

```
$ npm install eslint-plugin-es-jacket --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-es-jacket` globally.

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
        "es-jacket/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here






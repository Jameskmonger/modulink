# modulink

Locally link a module so that it can be tested with ease.

## Usage

`modulink` can either be installed locally to your package or globally to the machine.

I recommend installing it locally, because then it will be installed for users with the `npm install` command.

### Local

To install `modulink` locally, run the following command:

    npm install --save-dev modulink

(as `modulink` is primarily used for testing, it should be saved as a developer dependency rather than a user one)

You can then use it like this:

    node ./node_modules/.bin/modulink --name=YOUR_PACKAGE_NAME

This will create a folder called `YOUR_PACKAGE_NAME` in the `node_modules` folder which contains your folder contents, as if it were installed from npm.

You can then use it easily in `require` and `import` statements, such as:

```javascript
var someFile = require('YOUR_PACKAGE_NAME/src/someFile');
```

### Global

To install `modulink` globally, run the following command:

    npm install -g modulink

(this command will usually need to be performed as admin or run with `sudo`)

You can then use it like this:

    modulink --name=YOUR_PACKAGE_NAME

This will create a folder called `YOUR_PACKAGE_NAME` in the `node_modules` folder which contains your folder contents, as if it were installed from npm.

You can then use it easily in `require` and `import` statements, such as:

```javascript
var someFile = require('YOUR_PACKAGE_NAME/src/someFile');
```

## Why?

I was tired of having to do relative path links when testing projects.

For example, with a folder structure like this:

- project
    - src
        - utils
            - util-class.js
    - test
        - utils
            - util-class.test.js

In `util-class.test.js`, you'd have to import the `util-class.js` file with a statement like this:

```javascript
var UtilClass = require('../../src/utils/util-class');
```

However with `modulink`, you could import it like this:

```javascript
var UtilClass = require('project/utils/util-class');
```

That would be the syntax **regardless** of how deep you were in the `test` directory!

## License

[MIT](/LICENSE)

(function(mod) {

    mod.exports = function (args) {

        var issues = [];

        if (!args.name) {
            issues.push({
                syntax: '--name PACKAGE_NAME',
                example: '--name modulink'
            });
        }

        return issues;

    };

})(module);

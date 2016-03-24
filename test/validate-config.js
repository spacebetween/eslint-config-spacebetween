var eslint = require('eslint')
var test = require('tape')

test('load config in eslint to validate all rule syntax is correct', function (t) {
    var CLIEngine = eslint.CLIEngine

    var cli = new CLIEngine({
        useEslintrc: true
    })

    var code = "var foo = 'bar';";

    t.ok(cli.executeOnText(code).errorCount === 0)
    t.end()
})

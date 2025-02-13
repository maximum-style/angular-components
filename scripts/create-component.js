const cli = require('@angular/cli');

const args = process.argv;
const name = args[2];

cli.default({
    cliArgs: [
        'generate',
        'component',
        `components/${name}`,
        '--selector',
        `max-${name}`
]});

cli.default({
    cliArgs: [
        'generate',
        'component',
        `showcase/${args[2]}-showcase`,
        '--skip-selector'
]});

const cli = require('@angular/cli');

const args = process.argv;

let type = args[2];
const name = args[3];
let path = '';

const supportTypes = [
    'component', 'c',
    'directive', 'd'
];

if (!supportTypes.includes(type)) {
    throw new Error(`Type '${type}' is unsupported by this script, please use one of the following:\n${supportTypes.join(', ')}`);
}

switch (type) {
    case 'component':
    case 'c': {
        type = 'component';
        break;
    }
    case 'directive':
    case 'd': {
        type = 'directive';
        path = `${name}/`
        break;
    }
}

cli.default({
    cliArgs: [
        'generate',
        type,
        `components/${path}${name}`,
        '--prefix',
        `max`
]});

cli.default({
    cliArgs: [
        'generate',
        'component',
        `showcase/${name}-showcase`,
        '--skip-selector',
        '--skip-tests'
]});

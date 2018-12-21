#!/usr/bin/env node
require('shelljs/global');
const svgm = require('../src/exec/svgm');

const argv = require('yargs')
    .usage('Usage: schema subcommand [opitons] src dest')
    .example('schema svgm -b -p icon- ./\/*.svg  ./output/result.svg')
    .help('h')
    .alias('h', 'help')
    .command('svgm', '[options]', (yargs) => {
        console.log(yargs.argv._.length);
        if (yargs.argv._.length > 1) {
            throw new Error("invalid arguments length for command svgm!");
        }
        const argv = yargs.reset()
            .option('p', {
                description: 'custom svg name prefix'
            })
            .option('b', {
                description: 'format and beautiful output svg'
            })
            .help('h')
            .alias('h', 'help')
            .argv;
        svgm(yargs.argv);
    })
    .argv;

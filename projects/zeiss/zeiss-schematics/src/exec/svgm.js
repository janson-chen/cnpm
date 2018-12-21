require('shelljs/global');
const svgo = require('svgo');
const svgshelf = require('svgshelf');
const path = require('path');
const defaultSvgFileName = 'symbol-defs';

module.exports = (args) => {
     echo("***merge svg files into a single file***");
     exec('svgo', ['f'], path.resolve('.'), (err, stdout, stderr) => {
        if (err) {
            throw err;
        }
        console.log(stdout);
     });
     mkdir('output');
     cd('output');
     touch(`${defaultSvgFileName}.svg`);
     exec(`svgshelf ${args.b ? '-b' : ''} -p ${args.p}  ../\/*.svg ./${defaultSvgFileName}.svg`, (err, stdout, stderr) => {
        if (err) {
            throw err;
        }
        console.log(stdout);
     });
}

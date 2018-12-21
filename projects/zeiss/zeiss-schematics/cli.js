require('shelljs/global');

let yarnBin;

exec('yarn -v', (err) => {
    if (err) {
        echo('***prepare yarn***');
        exec('npm install -g yarn');
    }
    exec('yarn global bin', (err, stdout) => {
        if (err) {
            throw err;
        }
        yarnBin = stdout;
        packagePrepare();
    });
});

function packagePrepare() {
    echo('***build package***');
    exec('yarn build');
    echo('***prepare @angular/cli and @angular-devkit/schematics-cli***');
    exec('ng -v', (err) => {
        if (err) {
            console.error(err);
            exec(`npm install -g  @angular/cli`);
            exec(`npm install -g  @angular-devkit/schematics-cli`);
        }
        prepareCnpm();
    });
}

function prepareCnpm() {
    echo('***prepare cnpm***');
    exec('cnpm --version', (err) => {
        if (err) {
            console.error(err);
            exec(`npm install -g cnpm`, (err) => {
                if (err) {
                    throw err;
                }

                prepareZeissSchema();
            });
        }
    });
}

function prepareZeissSchema() {
    echo('***prepare @zeiss/zeiss-schematics***');
    exec(`cnpm install -g --ignore-scripts @zeiss/zeiss-schematics`);
}

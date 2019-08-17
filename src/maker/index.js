/**
 *     _  __      ___
 *  _ | |/ _|__ _|   \ _____ __
 * | || |  _/ _` | |) / -_) V /
 *  \__/|_| \__,_|___/\___|\_/
 * https://jordifernandes.com
 *
 * index.js (2019-05-23T15:35:14-03:00)
 *
 * @package:   jfa-pwa-toolkit
 * @author:    Jordi Fernandes Alves <jfadev@gmail.com>
 * @version:   1.0.0
 * @license:   MIT License
 * @link:      https://github.com/jfadev/jfa-pwa-toolkit/
 * @docs:      https://github.com/jfadev/jfa-pwa-toolkit/blob/master/README.md
 */


const fs = require('fs');
const ncp = require('ncp').ncp;
const prompt = require('prompt');
const colors = require("colors/safe");

console.log(colors.yellow.bold("-----------------------------"));
console.log(colors.yellow.bold.underline("PWA Tookit Maker (by @jfadev)"));
console.log(colors.yellow.bold("-----------------------------"));

prompt.message = colors.green("input");
prompt.delimiter = colors.grey(" > ");

const schema = {
    properties: {
        'app-name': {
            description: colors.cyan("What's your App name? (ex: 'PWA Toolkit Demo')"),
            required: true
        },
        'app-version': {
            description: colors.cyan("What's your App version? (ex: 'v1.0.0')"),
            required: true
        },
        'root-dir': {
            description: colors.cyan("What's a root directory of your App? (ex: '/')"),
            required: true
        },
        'config-dir': {
            description: colors.cyan("In which directory to generate the 'pwa.config.js' file? (ex: '/')"),
            required: true
        },
        'manifest-dir': {
            description: colors.cyan("In which directory to generate the 'manifest.json' file? (ex: '/')"),
            required: true
        },
        'icons-dir': {
            description: colors.cyan("In which directory to generate the icons? (ex: '/assets/icons/')"),
            required: true
        },
        'sw-dir': {
            description: colors.cyan("In which directory to generate the service workers? (ex: '/assets/sw/')"),
            required: true
        },
    }
};

prompt.start();
prompt.get(schema, (err, result) => {

    const APP_NAME = result['app-name'];
    const APP_VERSION = result['app-version'];

    const ROOT_DIR = result['root-dir'];
    const CONFIG_DIR = result['config-dir'];
    const MANIFEST_DIR = result['manifest-dir'];
    const ICONS_DIR = result['icons-dir'];
    const SW_DIR = result['sw-dir'];

    /* Templates */
    const CONFIG_TPL = 'jfa-pwa-toolkit/src/templates/public/pwa.config.js';
    const MANIFEST_TPL = 'jfa-pwa-toolkit/src/templates/public/manifest.json';
    const SW_TPL = 'jfa-pwa-toolkit/src/templates/public/sw.js';
    const ICONS_ASSETS = 'jfa-pwa-toolkit/src/templates/assets/icons/';
    const SW_ASSETS = 'jfa-pwa-toolkit/src/templates/assets/sw/';

    /* Maker */
    makeDir(CONFIG_DIR);
    generateFile(CONFIG_TPL, CONFIG_DIR, 'pwa.config.js', [{
            name: 'app-name',
            value: APP_NAME
        },
        {
            name: 'app-version',
            value: APP_VERSION
        },
        {
            name: 'icons-dir',
            value: ICONS_DIR
        }
    ]);

    makeDir(MANIFEST_DIR);
    generateFile(MANIFEST_TPL, MANIFEST_DIR, 'manifest.json', [{
            name: 'app-name',
            value: APP_NAME
        },
        {
            name: 'app-version',
            value: APP_VERSION
        },
        {
            name: 'icons-dir',
            value: ICONS_DIR
        }
    ]);

    generateFile(SW_TPL, ROOT_DIR, 'sw.js', [{
            name: 'config-dir',
            value: CONFIG_DIR
        },
        {
            name: 'sw-dir',
            value: SW_DIR
        }
    ]);

    makeDir(ICONS_DIR);
    copyFolder(ICONS_ASSETS, ICONS_DIR);

    makeDir(SW_DIR);
    copyFolder(SW_ASSETS, SW_DIR);
});

const generateFile = (templatePath, outputPath, filename, fields) => {
    var template = fs.readFileSync(templatePath, 'utf8');
    fields.forEach(field => {
        template = template.replace(new RegExp(`{{${field.name}}}`, 'gm'), field.value);
    });
    fs.writeFile(`.${outputPath+filename}`, template, err => {
        if (err) {
            console.error(err.message);
            return false;
        }
        console.log(colors.bgGreen(`'${outputPath+filename}' generated!`));
        return true;
    });
};


const copyFolder = (fromPath, toPath) => {
    ncp(fromPath, '.' + toPath, err => {
        if (err) {
            return console.error(err);
        }
        console.log(colors.bgGreen(`'${toPath}' copied!`));
    });
};

/**
 * Copy directory
 * @param  {string} dirPath Path of a directory to copy
 */
const makeDir = (dirPath) => {
    if (dirPath !== '/') {
        fs.mkdir('.' + dirPath, {
            recursive: true
        }, (err) => {
            return console.error(err);
        });
        console.log(colors.bgGreen(`'${dirPath}' created!`));
    }
};

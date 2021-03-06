"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const path = require('path');
// Instead of `any`, it would make sense here to get a schema-to-dts package and output the
// interfaces so you get type-safe options.
function default_1(options) {
    // The chain rule allows us to chain multiple rules and apply them one after the other.
    return schematics_1.chain([
        (_tree, context) => {
            // Show the options for this Schematics.
            context.logger.info('CZ Schematics Schema: ' + JSON.stringify(options));
        },
        // The mergeWith() rule merge two trees; one that's coming from a Source (a Tree with no
        // base), and the one as input to the rule. You can think of it like rebasing a Source on
        // top of your current set of changes. In this case, the Source is that apply function.
        // The apply() source takes a Source, and apply rules to it. In our case, the Source is
        // url(), which takes an URL and returns a Tree that contains all the files from that URL
        // in it. In this case, we use the relative path `./files`, and so two files are going to
        // be created (test1, and test2).
        // We then apply the template() rule, which takes a tree and apply two templates to it:
        //   path templates: this template replaces instances of __X__ in paths with the value of
        //                   X from the options passed to template(). If the value of X is a
        //                   function, the function will be called. If the X is undefined or it
        //                   returns null (not empty string), the file or path will be removed.
        //   content template: this is similar to EJS, but does so in place (there's no special
        //                     extension), does not support additional functions if you don't pass
        //                     them in, and only work on text files (we use an algorithm to detect
        //                     if a file is binary or not).
        schematics_1.mergeWith(schematics_1.apply(schematics_1.url('./files'), [
            schematics_1.template({
                type: options.type
            }),
            schematics_1.move(/(.*)(src[\\|\/]app.*)/i.test(path.resolve('.')) ? path.resolve('.').replace(/(.*)(src[\\|\/]app.*)/i, '$2') : '')
        ]))
    ]);
}
exports.default = default_1;
//# sourceMappingURL=index.js.map
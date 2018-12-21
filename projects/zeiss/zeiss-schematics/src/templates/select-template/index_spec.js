"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const testing_1 = require("@angular-devkit/schematics/testing");
const path = require("path");
// SchematicTestRunner needs an absolute path to the collection to test.
const collectionPath = path.join(__dirname, '../collection.json');
describe('cz', () => {
    it('requires required option', () => {
        // We test that
        const runner = new testing_1.SchematicTestRunner('schematics', collectionPath);
        expect(() => runner.runSchematic('cz', {}, schematics_1.Tree.empty())).toThrow();
    });
    it('works', () => {
        const runner = new testing_1.SchematicTestRunner('schematics', collectionPath);
        const tree = runner.runSchematic('cz', { type: 'str' }, schematics_1.Tree.empty());
        // Listing files
        expect(tree.files.sort()).toEqual(['/cz-select-template.html']);
    });
});
//# sourceMappingURL=index_spec.js.map
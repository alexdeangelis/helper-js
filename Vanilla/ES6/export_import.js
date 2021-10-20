// You can import javascript dependencies within another JS file, instead of doing it in the HTML

// With a default variable import, you can choose the name for the import
// This is beacuse it knows exactly what you're importing
import prs from './export_import/person.js';

// You can also explicitly target a variable within a file to import:
import { clean } from './export_import/utility.js.js.js'; 
clean();

// You can choose an alias for the imported function by using the as keyword:
import { clean as soClean } from './export_import/utility.js.js.js'; 
soClean();

// If you have multiple exportable variables in a file, you can use * to import all & assign an alias to the bundle:
// The alias would be a JavaScript object
import * as myBundle from './export_import/utility.js.js.js'; 
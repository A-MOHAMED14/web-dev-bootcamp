// TODO: Add a comment explaining role of the index.js file and import statements
// Index.js is the entry point file.
// Imports other modules and assets into this file.

import { boxClick } from './box';
import { headerClick } from './header';

document.getElementById('boxBtn').addEventListener('click', boxClick);
document.getElementById('headerBtn').addEventListener('click', headerClick);

const ffi = require('ffi-napi');

const myLibrary = ffi.Library('./main', {
    'myFunction': ['int', ['int', 'int']],
    'hui': ['char', ['void']]
});



const result = myLibrary.hui(4);
console.log(`result: ${result}`);
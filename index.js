const ffi = require('ffi-napi');

const cppLibrary = ffi.Library('./main', {
    'showName': ['void', ['string']],
    
});

let name = "Sergey";

const result = cppLibrary.showName(name);

console.log(`result: ${result}`);
import ffi from 'ffi-napi';

const cppLibrary = ffi.Library('./main', {
    'showName': ['void', ['string']],
});

function sendDataToCpp(data) {

    console.log('Data from Express:', data);

    try {
        const result = cppLibrary.showName(data.name);
        console.log(`Result from C++: ${result}`);
    } catch (error) {
        console.error('Error calling C++ function:', error);
    }   
}

export default sendDataToCpp;
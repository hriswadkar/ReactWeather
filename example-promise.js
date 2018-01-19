
// function getTempCallback (location, callback) {

// }

// getTempCallback('Mumbai', function (err, temp) {
//     if(err) {
//         console.log('error', err);
//     } else {
//         console.log('success', temp);
//     }
// });

// function getTempPromise (location) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve(79);
//             reject('City not found');
//         }, 1000);
//     });
// }

// getTempPromise('Mumbai').then(function (temp) {
//     console.log('promise success', temp);
// }, function(err) {
//     console.log('promise error', err);
// });

// challenge area

function addPromise(a, b) {
    return new Promise(function (resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject('parameter(s) are not numbers');
        }
    });
}

addPromise(10, 20).then(function (sum) {
    console.log('Promise Success', sum);
}, function (err) {
    console.log('Promise Error', err);
});

addPromise('ABC', 20).then(function (sum) {
    console.log('Promise Success', sum);
}, function (err) {
    console.log('Promise Error', err);
});

addPromise(10, 'XYZ').then(function (sum) {
    console.log('Promise Success', sum);
}, function (err) {
    console.log('Promise Error', err);
});
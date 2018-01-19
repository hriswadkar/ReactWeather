var names = ['Harshad', 'Chandra','Shyam','Pinak'];

names.forEach(function (name) {
    //console.log('forEach', name);
});

names.forEach((name) => {
    //console.log('arrowFunc', name);
});

//names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('Harshad'));

var person = {
    name: 'Andrew',
    greet: function () {
        names.forEach(function (name) {
            console.log(this.name + ' says hi to ' + name);
        });
    }
};

person.greet();

var person2 = {
    name: 'Andrew',
    greet: function () {
        names.forEach((name) => {
            console.log(this.name + ' says hi to ' + name);
        });
    }
};

person2.greet();

// Challenge

function add (a, b) {
    return a + b;
}

var addFunction1 = (a, b) => {
    return a + b;
}

var addFunction2 = (a, b) => a + b;

console.log(addFunction1(10, 10));
console.log(addFunction2(9, 0));
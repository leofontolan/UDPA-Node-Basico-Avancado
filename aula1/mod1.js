const firstName = 'John';
const lastName = 'Doe';

const sayFullName = () => {
    console.log(`${firstName} ${lastName}`);
};

// module.exports.firstName = firstName;
// 

exports.firstName = firstName;
exports.lastName = lastName;
exports.sayFullName = sayFullName;
this.qualquer = 'qualquer';


//console.log(module.exports);
const path = require('path');
const pathFile = path.resolve(__dirname, 'test.json');
const writeFile = require('./modules/write');
const readFile = require('./modules/read');

// const person = [
//     {firstName: 'John'},
//     {firstName: 'Maria'},
//     {firstName: 'Gabriel'},
//     {firstName: 'Gustavo'},
//     {firstName: 'Adriana'},
//     {firstName: 'Marina'},
//     {firstName: 'Carlos'},
//     {firstName: 'Leo'},
// ];

//const json = JSON.stringify(person, '', 2);

//writeFile(pathFile, json);

async function readData(path){
    const data = await readFile(path);
    renderData(data);
}

function renderData(data){
    console.log(data);
}

readData(pathFile);
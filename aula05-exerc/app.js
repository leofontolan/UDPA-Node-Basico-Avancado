const path = require('path');
const filePath = path.resolve(__dirname, 'people.json');
const write = require('./modules/write');
const read = require('./modules/read');

const people = [
  { nome: 'João' },
  { nome: 'Maria' },
  { nome: 'Eduardo' },
  { nome: 'Luiza' },
];

// const json = JSON.stringify(people, '', 2);
// write(filePath, json);

async function readFile(filePath) {
  const fileData = await read(filePath);
  renderData(fileData);
}

function renderData(fileData) {
  dt = JSON.parse(fileData);
  dt.forEach(val => console.log(val.nome));
}
readFile(filePath);

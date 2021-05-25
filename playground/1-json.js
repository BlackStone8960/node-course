const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON)

data.name = 'Taichi'
data.age = 28

const originalJSON = JSON.stringify(data);
fs.writeFileSync('1-json.json', originalJSON)
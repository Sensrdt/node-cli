const chalk = require('chalk');
const yaml = require('js-yaml');
const fs = require('fs');
const Handlebars = require('handlebars');

console.log('RUNNING');

let myArgs = process.argv.slice(2);

console.log('myArgs : ', myArgs);

if (myArgs[0] === '-i') {
	try {
		let fileContent = fs.readFileSync(`./${myArgs[1]}.yaml`, 'utf-8');
		let data = yaml.loadAll(fileContent);

		console.log(data, ' ', data[0].data);

		let outputFile = fs.readFileSync(`./${myArgs[3]}.yaml`, 'utf-8');

		let compile_1 = Handlebars.compile(outputFile);
		let result_1 = compile_1(data[0].data);
		console.log('RESULT : ', result_1);
	} catch (e) {
		console.log(e);
	}
}

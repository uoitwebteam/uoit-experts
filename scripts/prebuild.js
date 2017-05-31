#!/usr/bin/env node
require('dotenv').config();

const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

const environmentsDir = path.join(__dirname, '../src/environments');
const environments = ['environment.prod.ts', 'environment.ts'];

const environmentDefaults = {
  API_ID: '',
  API_KEY: '',
  API_SECRET: ''
};

environments.forEach(target => {
	// Load template file
	const template = fs.readFileSync(
	  path.join(environmentsDir, `${target}.ejs`),
	  { encoding: 'utf-8' }
	);
	// Generate output data
	const output = ejs.render(template, Object.assign({}, environmentDefaults, process.env));
	// Write environment file
	fs.writeFileSync(path.join(environmentsDir, target), output);
});

process.exit(0);
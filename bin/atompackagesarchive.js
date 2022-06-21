#!/usr/bin/env node

const app = require('../src/atompackagesarchive.js');

const args = process.argv.slice(2);

module.exports = app
    .run(args);

// Node.js script to generate env.js from .env file
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const envVars = [
  'FIREBASE_API_KEY',
  'FIREBASE_AUTH_DOMAIN',
  'FIREBASE_PROJECT_ID',
  'FIREBASE_APP_ID',
  'FIREBASE_DATABASE_URL'
];

const envObject = envVars.reduce((acc, key) => {
  acc[key] = process.env[key] || '';
  return acc;
}, {});

const jsContent = `window.ENV = ${JSON.stringify(envObject, null, 2)};\n`;

fs.writeFileSync(path.join(__dirname, './public/env.js'), jsContent);
console.log('env.js generated successfully!');

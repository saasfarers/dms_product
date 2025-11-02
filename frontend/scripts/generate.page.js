const fs = require('fs');
const path = require('path');

const componentName = process.argv[2];

if (!componentName) {
  console.error('❌ Please provide a component name.\nExample: npm run generate:component FrontPage');
  process.exit(1);
}

const baseDir = path.resolve(__dirname, '../src/pages', componentName.toLowerCase());

if (fs.existsSync(baseDir)) {
  console.error('❌ Component already exists:', baseDir);
  process.exit(1);
}

fs.mkdirSync(baseDir, { recursive: true });

// ------------------------------------------ Create ComponentName.js ------------------------------------------
const componentFilePath = path.join(baseDir, `${componentName}.js`);
const componentContent = `
import React from 'react';
import { data } from './data';
import { samplefunction } from './helper';
import { fetchData } from './api';
import useStyles from './style';

function ${componentName}() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            ${componentName} Component
        </div>
    );
}

export default ${componentName};
`.trim();

fs.writeFileSync(componentFilePath, componentContent, 'utf8');

// ------------------------------------------ Create ComponentName.data.js ------------------------------------------
const dataFilePath = path.join(baseDir, `data.js`);
const dataContent = `
export const data = {
    en: { 'key': "Value" },
    fr: { 'key': "Valeur" },
    ar: { 'key': "قيمة" }
};
`.trim();

fs.writeFileSync(dataFilePath, dataContent, 'utf8');

// ------------------------------------------ Create ComponentName.style.js ------------------------------------------
const styleFilePath = path.join(baseDir, `style.js`);
const styleContent = `
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '20px',
        backgroundColor: '#f9f9f9',
    },
}));

export default useStyles;
`.trim();

fs.writeFileSync(styleFilePath, styleContent, 'utf8');

// ------------------------------------------ Create ComponentName.function.js ------------------------------------------
const functionFilePath = path.join(baseDir, `helper.js`);
const functionContent = `
export const samplefunction = () => {
    console.log('helper function');
};
`.trim();

fs.writeFileSync(functionFilePath, functionContent, 'utf8');

// ------------------------------------------ ComponentName.api.js ------------------------------------------
const apiContent = `
import axios from 'axios';

export const fetchData = async () => {
    try {
        const response = await axios.get(\`\${process.env.REACT_APP_API_URL}/\`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
`.trim();

fs.writeFileSync(path.join(baseDir, `api.js`), apiContent, 'utf8');

// ------------------------------------------ Done ------------------------------------------
console.log(`✅ Component "${componentName}" created with:`);
console.log(`   - ${componentName}.js`);
console.log(`   - data.js`);
console.log(`   - style.js`);
console.log(`   - helper.js`);
console.log(`   - api.js`);
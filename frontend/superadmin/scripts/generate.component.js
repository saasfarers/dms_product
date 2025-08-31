const fs = require('fs');
const path = require('path');

const componentName = process.argv[2];

if (!componentName) {
  console.error('❌ Please provide a component name.\nExample: npm run generate:component FrontPage');
  process.exit(1);
}

const baseDir = path.resolve(__dirname, '../src/component', componentName.toLowerCase());

if (fs.existsSync(baseDir)) {
  console.error('❌ Component already exists:', baseDir);
  process.exit(1);
}

fs.mkdirSync(baseDir, { recursive: true });

// ------------------------------------------ Create ComponentName.js ------------------------------------------
const componentFilePath = path.join(baseDir, `${componentName}.js`);
const componentContent = `
import React from 'react';
import { ${componentName}Data } from './${componentName}.data';
import { sample${componentName}function } from './${componentName}.helper';
import { fetch${componentName}Data } from './${componentName}.api';
import useStyles from './${componentName}.style';

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
const dataFilePath = path.join(baseDir, `${componentName}.data.js`);
const dataContent = `
const ${componentName}Data = {
    en: { '${componentName}_key': "Value" },
    fr: { '${componentName}_key': "Valeur" },
    ar: { '${componentName}_key': "قيمة" }
};

module.export = {
    ${componentName}Data
}
`.trim();

fs.writeFileSync(dataFilePath, dataContent, 'utf8');

// ------------------------------------------ Create ComponentName.style.js ------------------------------------------
const styleFilePath = path.join(baseDir, `${componentName}.style.js`);
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
const functionFilePath = path.join(baseDir, `${componentName}.helper.js`);
const functionContent = `
const sample${componentName}function = () => {
    console.log('${componentName} helper function');
};

module.export = {
    sample${componentName}function
}
`.trim();

fs.writeFileSync(functionFilePath, functionContent, 'utf8');

// ------------------------------------------ ComponentName.api.js ------------------------------------------
const apiContent = `
import axios from 'axios';

const fetch${componentName}Data = async () => {
    try {
        const response = await axios.get(\`\${process.env.REACT_APP_API_URL}/${componentName.toLowerCase()}\`);
        return response.data;
    } catch (error) {
        console.error('Error fetching ${componentName} data:', error);
        throw error;
    }
};

module.export = {
    fetch${componentName}Data
}
`.trim();

fs.writeFileSync(path.join(baseDir, `${componentName}.api.js`), apiContent, 'utf8');

// ------------------------------------------ Done ------------------------------------------
console.log(`✅ Component "${componentName}" created with:`);
console.log(`   - ${componentName}.js`);
console.log(`   - ${componentName}.data.js`);
console.log(`   - ${componentName}.style.js`);
console.log(`   - ${componentName}.helper.js`);
console.log(`   - ${componentName}.api.js`);

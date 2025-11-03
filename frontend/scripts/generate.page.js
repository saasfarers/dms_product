const fs = require("fs");
const path = require("path");

const componentName = process.argv[2];

if (!componentName) {
  console.error(
    "❌ Please provide a component name.\nExample: npm run generate:component FrontPage"
  );
  process.exit(1);
}

// ------------------------------------------ Define Base Paths ------------------------------------------
const pagesDir = path.resolve(__dirname, "../src/pages", componentName.toLowerCase());
const stylesDir = path.resolve(__dirname, "../src/styles", componentName.toLowerCase());
const apiDir = path.resolve(__dirname, "../src/api", componentName.toLowerCase());
const helperDir = path.resolve(__dirname, "../src/helpers", componentName.toLowerCase());
const dataDir = path.resolve(__dirname, "../src/datas", componentName.toLowerCase());

// ------------------------------------------ Check if Exists ------------------------------------------
if (
  fs.existsSync(pagesDir) ||
  fs.existsSync(stylesDir) ||
  fs.existsSync(apiDir) ||
  fs.existsSync(helperDir) ||
  fs.existsSync(dataDir)
) {
  console.error(`❌ Component "${componentName}" already exists.`);
  process.exit(1);
}

// ------------------------------------------ Create Directories ------------------------------------------
fs.mkdirSync(pagesDir, { recursive: true });
fs.mkdirSync(stylesDir, { recursive: true });
fs.mkdirSync(apiDir, { recursive: true });
fs.mkdirSync(helperDir, { recursive: true });
fs.mkdirSync(dataDir, { recursive: true });

// ------------------------------------------ Component File ------------------------------------------
const componentFilePath = path.join(pagesDir, `${componentName}.js`);
const componentContent = `
import React from 'react';
import { data } from '../../datas/${componentName.toLowerCase()}/data';
import { samplefunction } from '../../helpers/${componentName.toLowerCase()}/helper';
import { fetchData } from '../../api/${componentName.toLowerCase()}/api';
import useStyles from '../../styles/${componentName.toLowerCase()}/style';

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

fs.writeFileSync(componentFilePath, componentContent, "utf8");

// ------------------------------------------ Data File ------------------------------------------
const dataFilePath = path.join(dataDir, `data.js`);
const dataContent = `
export const data = {
    en: { key: "Value" },
    fr: { key: "Valeur" },
    ar: { key: "قيمة" }
};
`.trim();

fs.writeFileSync(dataFilePath, dataContent, "utf8");

// ------------------------------------------ Helper File ------------------------------------------
const helperFilePath = path.join(helperDir, `helper.js`);
const helperContent = `
export const samplefunction = () => {
    console.log('helper function');
};
`.trim();

fs.writeFileSync(helperFilePath, helperContent, "utf8");

// ------------------------------------------ Style File ------------------------------------------
const styleFilePath = path.join(stylesDir, `style.js`);
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

fs.writeFileSync(styleFilePath, styleContent, "utf8");

// ------------------------------------------ API File ------------------------------------------
const apiFilePath = path.join(apiDir, `api.js`);
const apiContent = `
import axios from 'axios';

export const fetchData = async () => {
    try {
        const response = await axios.get(\`\${process.env.REACT_APP_API_URL}/endpoint\`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
`.trim();

fs.writeFileSync(apiFilePath, apiContent, "utf8");

// ------------------------------------------ Done ------------------------------------------
console.log(`✅ Component "${componentName}" created successfully!`);
console.log(`   📁 /src/pages/${componentName.toLowerCase()}/${componentName}.js`);
console.log(`   📁 /src/styles/${componentName.toLowerCase()}/style.js`);
console.log(`   📁 /src/api/${componentName.toLowerCase()}/api.js`);
console.log(`   📁 /src/helpers/${componentName.toLowerCase()}/helper.js`);
console.log(`   📁 /src/datas/${componentName.toLowerCase()}/data.js`);

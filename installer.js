#!/usr/bin/env node
const { execSync } = require('child_process');
const { log } = require('console');
const fs = require('fs');

function runCommands() {

    console.log("Starting Vite Setup...Prepare your Chai until then...");
    try {
        execSync('npm create vite@latest . -- --template react -y', { stdio: 'inherit' });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
    console.log("Vite React App installed successfully.")
    console.log("Starting Setup......")
    console.log("Installing Tailwind and PostCSS...");

    try {
        execSync('npm install -D tailwindcss postcss autoprefixer', { stdio: 'inherit' });
        execSync('npx tailwindcss init -p', { stdio: 'inherit' });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }


    // Modify the tailwind.config.js file to include Tailwind react plugin
    try {
        const tailwindConfigPath = './tailwind.config.js';
        const tailwindConfig = `/** @type {import('tailwindcss').Config} */
    export default {
        content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
        ],
        theme: {
            extend: {},
        },
        plugins: [],
    }`;
        fs.writeFileSync(tailwindConfigPath, tailwindConfig);
    } catch (error) {
        console.error(error);
        process.exit(1);

    }

    // Modify the index.css file to include Tailwind base, components, and utilities
    try {
        const indexCssPath = './src/index.css';
        const indexCss = `@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';`;
        fs.writeFileSync(indexCssPath, indexCss);
    } catch (error) {
        console.error(error);
        process.exit(1);

    }

    try {
        const appJsxPath = './src/App.jsx';
        const appJsx = `import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
const App = () => {
    return (
        <div className='bg-black min-h-screen flex items-center justify-center space-y-2'>
            <div className='flex  items-center p-4'>
                <img src={viteLogo} className="w-full" alt="Vite logo" />
                <img src={reactLogo} className="motion-safe:animate-spin w-full" alt="React logo" />
            <h1 className="text-5xl font-bold text-white">
                Chai Chai... Chai lelo Chai!
            </h1>
            </div>
        </div>
    );
};

export default App;`;
        fs.writeFileSync(appJsxPath, appJsx);
    } catch (error) {
        console.error(error);
        process.exit(1);

    }

    try {
        const appCssPath = './src/App.css';
        const appCss = ``;
        fs.writeFileSync(appCssPath, appCss);
    } catch (error) {
        console.error(error);
        process.exit(1);

    }

    console.log("Hope that your chai didn't get cold. React and Tailwind installed successfully!");
    console.log("To start developing, run: npm run dev");

    process.exit(0);
}

runCommands();

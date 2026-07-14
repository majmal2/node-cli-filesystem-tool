const fs = require('fs');

const command = process.argv[2];
const fileName = process.argv[3];
const word = process.argv[4];

if (!command || !fileName) {
    console.log("Usage: node script.js <command> <filename> [word]");
    process.exit(1);
}

try {
    // Read the file synchronously
    const fileContent = fs.readFileSync(fileName, 'utf8');
    const lines = fileContent.split('\n');

    if (command === 'cat') {
        // Display file contents
        console.log(fileContent);
    } 
    else if (command === 'wc') {
        // Count lines (subtract 1 if last line is empty)
        const count = fileContent.endsWith('\n') ? lines.length - 1 : lines.length;
        console.log(`Total lines: ${count}`);
    } 
    else if (command === 'grep') {
        if (!word) {
            console.log("Error: Please provide a search word.");
            process.exit(1);
        }
        // Print lines that contain the word
        lines.forEach(line => {
            if (line.toLowerCase().includes(word.toLowerCase())) {
                console.log(line);
            }
        });
    } 
    else if (command === 'search-count') {
        if (!word) {
            console.log("Error: Please provide a search word.");
            process.exit(1);
        }
        // Count lines containing the word
        let matchCount = 0;
        lines.forEach(line => {
            if (line.toLowerCase().includes(word.toLowerCase())) {
                matchCount++;
            }
        });
        console.log(`Matches found: ${matchCount}`);
    } 
    else {
        console.log(`Unknown command: ${command}`);
    }
} catch (error) {
    console.error(`Error reading file: ${error.message}`);
}
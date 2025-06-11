const readline = require('node:readline');
const fs = require('node:fs');
var path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let dir = '.';

function shell() {
    rl.question(dir + ' > ', cmd => {
        if (cmd === "exit") {
            rl.close();
            process.exit(0);
        } else if (cmd.startsWith("load ")) {
            const fileName = cmd.split(" ")[1];
            if (fileName) {
                if (fs.existsSync(fileName)) {
                    fs.readFile(fileName, 'utf8', (err, data) => {
                        if (err) {
                            console.error(`Error reading file: ${err.message}`);
                        } else {
                            console.log(`File content:\n${data}`);
                        }
                        shell();
                    });
                } else {
                    console.log("File does not exist.");
                    shell();
                }
            } else {
                console.log("Please provide a file name.");
                shell();
            }
        } else if (cmd.startsWith("ls")) {
            const dir = cmd.split(" ")[1] || '.';
            fs.readdir(dir, (err, files) => {
                if (err) {
                    console.error(`Error reading directory: ${err.message}`);
                } else {
                    console.log(files.join('\n'));
                }
                shell();
            });
        } else if (cmd.startsWith("cd ")) {
            const target_dir = cmd.split(" ")[1];
            if (target_dir) {
                dir = path.relative(process.cwd(), target_dir);
                process.chdir(target_dir);
            } else {
                console.log("Please provide a directory name.");
            }
            shell();
        } else {
            console.log("Unknown command");
            shell();
        }
    });
}

shell();
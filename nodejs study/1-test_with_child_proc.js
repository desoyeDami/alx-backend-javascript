const { spawn } = require('child_process');

const childProcess = spawn('node', ['../0x05-Node_JS_basic/1-stdin.js']);

// Handle child process output
childProcess.stdout.on('data', (name) => {
  childProcess.stdin.write(`Your name is: ${name}`);
});

// Handle child process exit
childProcess.on('exit', (code) => {
  console.log(`Child process exited with code ${code}`);
});
import {execFile} from 'node:child_process';
import { join,dirname } from 'node:path';
import { fileURLToPath } from "node:url";


const __dirname = dirname(fileURLToPath(import.meta.url));

const spawnChildProcess = async (args) => {
    const filePath = join(__dirname,'files','script.js')
   const child =  execFile("node",[filePath,...args])
   child.stdout.on("data",(data)=>{
    console.log(`Child process:\n${data.toString()}`);
   })
   child.on("exit", (code)=>{
    console.log(`Child process exited with code ${code}`);
    process.exit(code);
   })
   child.on("error",(err)=>{
    console.error(`Failed to start child process: ${err.message}`);
   })

   process.stdin.on("data", (data) => {
    child.stdin.write(data);
  });


};
// Put your arguments in function call to test this functionality
spawnChildProcess(['kei','k3i',1,2,3,'world']);

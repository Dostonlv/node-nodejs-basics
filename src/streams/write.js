import { join,dirname } from 'node:path';
import { fileURLToPath } from "node:url";
import fs from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));


const write = async () => {
    const filePath = join(__dirname,"files","fileToWrite.txt")
    const stream  =  fs.createWriteStream(filePath, {encoding: 'utf-8'});
    process.stdin.pipe(stream);
    console.log("Write something and press enter you want write to fileToWrite.txt file: ");

    console.log("Press Ctrl + C to exit");
 

};

await write();
import { join,dirname } from 'node:path';
import { fileURLToPath } from "node:url";
import fs from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));


const read = async () => {
   const filePath = join(__dirname,"files","fileToRead.txt")
    const file  =  fs.createReadStream(filePath, {encoding: 'utf-8'});
    file.on('data', (chunk) => {
        console.log(chunk);
    });
};

await read();
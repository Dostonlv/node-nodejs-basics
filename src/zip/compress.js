import { join,dirname } from 'node:path';
import { createGzip } from 'node:zlib';
import { fileURLToPath } from "node:url";
import fs from 'node:fs';


const __dirname = dirname(fileURLToPath(import.meta.url));

const compress = async () => {
   const filePath = join(__dirname,'files','fileToCompress.txt');
   const compressedFilePath = join(__dirname,'files','archive.gz');
    const file =  fs.createReadStream(filePath, {encoding: 'utf-8'});

    const compressedFile = fs.createWriteStream(compressedFilePath);
    const gzip = createGzip();
    file.pipe(gzip).pipe(compressedFile);
    console.log('File compressed');


};

await compress();
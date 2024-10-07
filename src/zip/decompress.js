import { join,dirname } from 'node:path';
import  zlib  from 'node:zlib';
import { fileURLToPath } from "node:url";
import fs from 'node:fs';
import stream from 'node:stream/promises';


const __dirname = dirname(fileURLToPath(import.meta.url));


const decompress = async () => {
    const compressedFilePath = join(__dirname,'files','archive.gz');
    const decompressedFilePath = join(__dirname,'files','fileToCompress.txt');

    const compressedFile =  fs.createReadStream(compressedFilePath);
    const decompressedFile = fs.createWriteStream(decompressedFilePath);

    const unzip =  zlib.createUnzip()

      stream.pipeline(compressedFile,unzip,decompressedFile)

};

await decompress();
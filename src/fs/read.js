import { join,dirname } from 'node:path';
import promises from 'node:fs/promises';
import { fileURLToPath } from "node:url";


const __dirname = dirname(fileURLToPath(import.meta.url));

const exists = async (fileName) => {
    try {
        await promises.access(fileName);
        return true;
    }
    catch {
        return false;
    }
}


const read = async () => {
    
        const fileName = join(__dirname,'files','fileToRead.txt');
        if (!await exists(fileName)) {
            throw new Error('FS operation failed');
        }
        const content = await promises.readFile(fileName);
        console.log(content.toString());
};

await read();
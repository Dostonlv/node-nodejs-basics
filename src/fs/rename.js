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

const rename = async () => {
    const source = join(__dirname,'files','wrongFilename.txt');
    const destination = join(__dirname,'files','properFilename.md');
    if (!await exists(source) || await exists(destination)) {
        throw new Error('FS operation failed');
    }
    await promises.rename(source, destination);
    console.log('File renamed');
    
};

await rename();
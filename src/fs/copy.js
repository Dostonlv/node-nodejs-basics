
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

const copy = async () => {
   
    const source = join(__dirname,'files');
    const destination = join(__dirname,'files_copy');
    if (!await exists(source) || await exists(destination)) {
        throw new Error('FS operation failed');
    }
    await promises.mkdir(destination);
    const files = await promises.readdir(source);
    for (const file of files) {
        const content = await promises.readFile(join(source,file));
        await promises.writeFile(join(destination,file), content);
    }
    console.log('Files copied');

};

await copy();

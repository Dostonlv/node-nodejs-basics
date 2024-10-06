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




const list = async () => {

    const source = join(__dirname,'files');
    if (!await exists(source)) {
        throw new Error('FS operation failed');
    }
    const files = await promises.readdir(source);
    console.log(files);
};

await list();
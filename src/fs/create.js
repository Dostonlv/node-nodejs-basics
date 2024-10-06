// create function to create files/fresh.txt and fresh.txt inside -> I am fresh and young 
// if file already exists then it should not overwrite the file

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

const create = async () => {
    const fileName = join(__dirname,'files','fresh.txt');
    const content = 'I am fresh and young';
    if (await exists(fileName)) {
        console.log('File already exists');
        return;
    }
    await promises.writeFile(fileName, content);
    console.log('File created');
};

await create();
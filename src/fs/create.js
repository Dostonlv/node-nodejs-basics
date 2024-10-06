// create function to create files/fresh.txt and fresh.txt inside -> I am fresh and young 
// if file already exists then it should not overwrite the file


// create file
import { join,dirname } from 'node:path';
import promises from 'node:fs/promises';
import { fileURLToPath } from "node:url";


const __dirname = dirname(fileURLToPath(import.meta.url));


const create = async () => {
    const fileName = join(__dirname,'files','fresh.txt');
    const content = 'I am fresh and young';

    try {
        await promises.access(fileName);
        console.log('File already exists');
    }
    catch {
        await promises.writeFile(fileName, content);
        console.log('File created');
    }

};

await create();
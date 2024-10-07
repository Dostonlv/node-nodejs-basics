import { join,dirname } from 'node:path';
import promises from 'node:fs/promises';
import { fileURLToPath } from "node:url";
import { createHash } from 'node:crypto';


const __dirname = dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
    const filePath = join(__dirname,"files","fileToCalculateHashFor.txt")
    const content = await promises.readFile(filePath);

    const hash = createHash('sha256');
    hash.update(content);
    const hashValue = hash.digest('hex');
    console.log(hashValue); // 7b90ad9e325c1c22b15c36cbe19413e3c471e5a711b8b828c8ebfcfd71d1d6db

};
s
await calculateHash();
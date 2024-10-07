import {Transform} from 'node:stream'
const transform = async () => {
    const stream = new Transform({
        transform(chunk,_,callback){
            const reversedChunk = chunk.toString().split('').reverse().join('');
            callback(null, reversedChunk);
        }
    });
    process.stdin.pipe(stream).pipe(process.stdout);
    console.log("Write anything and move to the next line to get its reverse!");
};

await transform();
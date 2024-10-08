import { parentPort, workerData } from 'worker_threads';


// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const result = nthFibonacci(workerData)

const sendResult = (n) => {
   parentPort.postMessage(result)
    

    process.exit(0)
};

sendResult(result);
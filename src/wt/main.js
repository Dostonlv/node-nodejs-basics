import { Worker } from "worker_threads";
import os from "os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));


const performCalculations = async () => {
  const numCores = os.cpus().length;
  const results = new Array(numCores).fill(null);
  let finishedWorkers = 0;

  const workerPath = join(__dirname, "worker.js");

  const promises = Array.from({ length: numCores }, (_, i) => {
    return new Promise((resolve) => {
      const worker = new Worker(workerPath, {
        workerData: 10 + i, 
      });
  
      results[i] = { status: null, data: null };
  
      worker.on("message", (message) => {

        results[i] = { status: "resolved", data: message };
  
        finishedWorkers += 1;
  

        if (finishedWorkers === numCores) {
          console.log('Final Results:', results); 
          resolve({ status: "success", data: results });
        }
      });
  
      worker.on("error", (error) => {
        console.error(`Worker error: ${error}`);
  

        results[i] = { status: "error", data: null };
  
        finishedWorkers += 1;
  
        if (finishedWorkers === numCores) {
          console.log('Final Results (with errors):', results);
          resolve({ status: "error", data: results });
        }
      });
    });
  });
  

  const final = await Promise.all(promises);
  console.log(final);
}

performCalculations();